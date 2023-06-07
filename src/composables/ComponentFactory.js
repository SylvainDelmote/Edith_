// INPUT TYPE: Object
// OUTPUT TYPE: Component
// DESCRIPTION: This function takes in an object and returns a component
         // https://developer.mozilla.org/fr/docs/Web/API/Web_components/Using_custom_elements
  //Pour enregistrer un élément personnalisé sur la page, vous utilisez la méthode CustomElementRegistry.define(). Elle prend comme arguments :

    //- une DOMString représentant le nom que vous donnez à l'élément ; notez que les noms d'éléments personnalisés doivent comprendre un tiret ; ils ne peuvent pas être des mots simples ;
    //- un objet de classe définissant le comportement de l'élément ;
    //- facultativement, un objet d'options contenant une propriété extends, qui indique l'élément intégré dont votre élément hérite, le cas échéant.

import * as Custom from '../components/custom components/index.js'
import { defineCustomElement, markRaw } from 'vue'

export function componentFactory (tag){
    const componentTable = ['span', 'div', 'img', 'checkbox']
    let element, range = undefined
    try {
        tag = tag.trim().toLowerCase();
        let tagIsAllowed = componentTable.includes(tag) ? true : false;
        if(!tagIsAllowed) throw new SyntaxError('Invalid component type');
        if(tag === 'span') return spanFactory()

    } catch (error) {
        alert(error.message);}
    try {
     const name = UID()
     element = defineCustomElement(markRaw(Custom[tag]) ) // < Recupere le CustomComponent et le transforme en Custom Element.
      const options = null
      customElements.define( name,element, options ) 
    
    } catch (error) {  
        alert(error.message)} 
    try{
        const selection = window.getSelection()
        if (!isValidSelection(selection)) {
            return
        }
        range = selection.getRangeAt(0);  
    } catch (error) {  
        alert(error.message)} 

    if(range && element)  {
        const customElement = new element()
        range.insertNode(customElement);
        range.collapse(true); // < Evite que la selection initial s'applique a tout le customElement
    }
    }
function UID(){
    const timestamp = new Date().getTime().toString()
    const randomName = Math.random().toString(16).substring(2,8) // Genere une chaine de charactere Aleatoire
    const UID  = `dom-${timestamp}-${randomName}`
    return UID.toLowerCase() // LowerCase Evite les Erreurs Aleatoire
  }
function isValidSelection( selection){
    const range = selection.getRangeAt(0);

    try{
        const page = document.querySelector('.page');
        let parentElement = range.commonAncestorContainer;
        while (parentElement !== page && parentElement.parentElement) {
            parentElement = parentElement.parentElement;
        }
        if (parentElement !== page) {
            return false
        }
    } catch (error) {       
        alert(error.message)}   
    return true 
    }

function spanFactory(){
  const selection = window.getSelection();   
  const range = selection.getRangeAt(0);  
  let element = undefined;

  try{
    let selectionIsEmpty  =  selection.rangeCount === 0 ? true : false
         if(selectionIsEmpty) return
   } catch (error) { alert(error.message)}

   try {
     const name = UID()
     element = defineCustomElement(markRaw(Custom.span) ) // < Recupere le CustomComponent et le transforme en Custom Element.
      const options = null
      customElements.define( name,element, options ) 
    
    } catch (error) { alert(error.message)}

    if(range && element)  {
        const customElement = new element({ motInitial: selection.toString().trim() } )
        selection.deleteFromDocument()
        range.insertNode(customElement);   
        range.collapse(true); 
    }
}