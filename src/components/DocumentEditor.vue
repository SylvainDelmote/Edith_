<script setup>
// IMPORT
import {ref, defineCustomElement, markRaw, computed } from "vue";
import VueDocumentEditor from '../../module/vue-document-editor'
import * as Custom from "../components/custom components/index.js";
import { useRouter } from 'vue-router'
import { getDataFromDb } from '../composables/ImportData.js'



// VARIABLES
const htmlPlaceholder = '<span><h1>What is Vue?!</h1>'+ 'Vue (pronounced /vju/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex. '
const { fetchedData, errorMessage } = getDataFromDb('/documents');

const contenu = ref([htmlPlaceholder
      ])
const contenuHtml = ref('')
const documentEstEditable = ref(true)
const numeroPageEstAffiche = ref(true)
const contenuPiedPage  = ref ('Contenu Pied Page Exemple')
const router = useRouter()



//FONCTIONS
const fetchData = () => {
      // Appeler getDataFromDb() à nouveau pour actualiser les données
      getDataFromDb('/documents');
    };




function creerCustomElement(customComponent){

  function generateurIDUnique(){
    const timestamp = new Date().getTime().toString()
    const nomAleatoire = Math.random().toString(16).substring(2,8) // Genere une chaine de charactere Aleatoire
    const nomUnique = `dom-${timestamp}-${nomAleatoire}`
    return nomUnique.toLowerCase() // LowerCase Evite les Erreurs Aleatoire
  }

  // https://developer.mozilla.org/fr/docs/Web/API/Web_components/Using_custom_elements
  //Pour enregistrer un élément personnalisé sur la page, vous utilisez la méthode CustomElementRegistry.define(). Elle prend comme arguments :

    //une DOMString représentant le nom que vous donnez à l'élément ; notez que les noms d'éléments personnalisés doivent comprendre un tiret ; ils ne peuvent pas être des mots simples ;
     const DOMString = generateurIDUnique()
    
    //un objet de classe définissant le comportement de l'élément ;
     const element = defineCustomElement(markRaw(customComponent) ) // < Recupere le CustomComponent et le transforme en Custom Element.
    
    //facultativement, un objet d'options contenant une propriété extends, qui indique l'élément intégré dont votre élément hérite, le cas échéant.
      const options = {}
    
    customElements.define( DOMString,element, options ) 
    
    return element
}

function insererCustomElement(customElement){
  // On recupere la selection de l'utilisateur et on insere le customElement
  const selection = window.getSelection();    
  const range = selection.getRangeAt(0);  
  range.insertNode(customElement);
  range.collapse(false);
}

function curseurEstDansZoneEdition(){
  const selection = window.getSelection();
  const node = selection.anchorNode
  if(!node){
    console.log('node', node)
    return false
  }
  const parentElement = node.parentElement
  const tagList = ['BUTTON']
  if( tagList.includes(  parentElement.tagName ) ){
    console.log('On a bloqué la creation sur cet element : ', parentElement.tagName)
    return false
  }
  return true

}

function rendreEditable(){
  if  (!curseurEstDansZoneEdition()){
    return
  }

  // On genere un CustomElement à Partir de notre CustomComponent
  const element = creerCustomElement(Custom.span)

  // On recupere la selection de l'utilisateur
  const selection = window.getSelection();     // < Recupere le mot / groupe selectionné par l'utilisateur
  const range = selection.getRangeAt(0);  // < Recupere l'emplacement dans lequel injecter le Custom Element
  const selectionCommeString = selection.toString().trim()
  // Si la selection est vide on termine la fonction 
  if(selectionCommeString.length === 0){
    return      
  }
  // On crée un nouveau DOM Node qu'on va subsituer à la selection de l'utilisateur
  const customNode = new element({motInitial: selectionCommeString}) 
  selection.deleteFromDocument()    
  range.insertNode(customNode);   

}

function ajouterBloc(){
  if  (!curseurEstDansZoneEdition()){
    return
  }

  // On genere un CustomElement à Partir de notre CustomComponent
  const element = creerCustomElement(Custom.div)
  const customElement = new element() 
    // On Ajoute notre Element dans le DOM
  insererCustomElement(customElement); 
  


}

function ajouterCheckBox(){
  if  (!curseurEstDansZoneEdition()){
    return
  }
  // On genere un CustomElement à Partir de notre CustomComponent
  const element = creerCustomElement(Custom.checkbox)
  const customElement = new element()   
  // On Ajoute notre Element dans le DOM
  insererCustomElement(customElement);

}

function ajouterImage(){
  if  (!curseurEstDansZoneEdition()){
    return
  }
  // On genere un CustomElement à Partir de notre CustomComponent
  const element = creerCustomElement(Custom.image)
  const customElement = new element()   
  // On Ajoute notre Element dans le DOM
  insererCustomElement(customElement);
}

function activerNumeroPage(){
  numeroPageEstAffiche.value = ! numeroPageEstAffiche.value
}

function editerContenuPiedPage(nouveauContenu){
  if(!nouveauContenu){
    nouveauContenu = window.prompt('Contenu du Pied de page ?')
  }
  contenuPiedPage.value = nouveauContenu
}

function gererPiedPage (page, total) {

  const numeroPage = computed ( ()=> numeroPageEstAffiche.value ? 
      '<div style="position: absolute; bottom: 8mm; ' + ((page % 2) ? 'right' : 'right') + ': 10mm">Page ' + page + ' sur ' + total + '</div>' 
      :''
    )

  const exEntete = '<div style="position: absolute; left: 0; top: 0; right: 0; padding: 3mm 5mm; background: rgba(200, 220, 240, 0.5)"><strong>MYCOMPANY</strong> example.com /// This is a custom header overlay</div>';
  const exPiedPage = `<div style="position: absolute; left: 10mm; right: 10mm; bottom: 5mm; text-align:center; font-size:10pt" >${contenuPiedPage.value}</div>`;
  let html = numeroPage.value+exPiedPage; 
  return html;
  }

function recupererHtml(){
  contenuHtml.value = document.querySelector('.editor').getInnerHTML({includeShadowRoots: true})
  navigator.clipboard.writeText(contenuHtml.value)
  window.alert('HTML copie dans le Presse Papier')
  console.log(contenuHtml.value)
}

function extraireHTMLparPage(){
  const listePages = document.querySelectorAll('.page')
  sessionStorage.clear();

  listePages.forEach((page, index) => {
    exporterHTMLversSessionStorage(page.getInnerHTML({includeShadowRoots: true}), index+1)
  });
  ouvrirPageLecteur()
}

function exporterHTMLversSessionStorage (contenuHTML, numeroPage){
  const base64Html = btoa(unescape(encodeURIComponent(contenuHTML))) /* btoa  = Methode JS pour convertir un String en BASE64. Unespace et EncoreURI evite les p de copier/coller depuis WOrd de contenu type Image ... */ 
  const base64HtmlString = JSON.stringify(base64Html)
  const nomdePage = `Page${numeroPage}`
  window.sessionStorage.setItem(nomdePage, base64HtmlString);

}

function ouvrirPageLecteur(){
  router.push('/lecteur')
}

function onPaste (evt) {
  evt.preventDefault()
  evt.stopPropagation()

  const selection = window.getSelection();
  selection.getRangeAt(0).insertNode(document.createTextNode(text));
  selection.collapseToEnd();

}

</script>

<template>
    <form
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
    class="text-main"
    >
    
    <VueDocumentEditor
      v-model:content="contenu"
      :editable= "documentEstEditable"
      :overlay="gererPiedPage"
      @paste="onPaste"
    />

  </form>


</template>

