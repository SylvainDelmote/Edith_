<script setup>
// IMPORT
import VueDocumentEditor from '../../module/vue-document-editor'
import BaseTemplate from '../components/templates/BaseTemplate.ce.vue';
import { ref, reactive, computed, markRaw, onMounted } from 'vue'


// VARIABLES
const storage = reactive({})   /* Exemple de storage :  {Page1 : '<div> .... </div'} */
const contenu =  reactive([])

// FONCTIONS
function importerSessionStorage(){
  Object.keys(sessionStorage).forEach(
    (key) => {
      if (key.startsWith('Page')){
        const contenuStocke = sessionStorage.getItem(key)
        const contenuB64 = JSON.parse(contenuStocke)
        const contenuHtml =  decodeURIComponent(escape(window.atob(contenuB64)));
        const contenuFiltre = retirerBaliseTemplate(contenuHtml)
        storage[key] =  contenuFiltre
      }
    }
  )
  console.log('Import du Contenu  depuis SessionStorage... ')
}

function genererContenu(){

  Object.keys(storage).forEach(
    (nomPage)=>contenu.push(  
      { template: markRaw(BaseTemplate), props: { innerHTML: storage[nomPage]  } } 
    )
  )
  console.log('Contenu Genere...')
}

function retirerBaliseTemplate(string){
  return string.replaceAll('template', 'edith');
}

//LIFECYCLE 
  // SETUP
  importerSessionStorage()
  genererContenu()

  // MOUNTED
  onMounted(()=>{
    console.log( 'Nombre de Pages : ', Object.keys(storage).length)
  }
  )
  
// TEMPORAIRE TEST OVERLAY
const numeroPageEstAffiche = ref(true)
const contenuPiedPage  = ref ('Contenu Pied Page Exemple')
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


</script>

<template>
  <q-page class="flex flex-center">
    <form
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false"
    >
<VueDocumentEditor 
  v-model:content= contenu
  :editable=false
  :overlay="gererPiedPage"
/> 
    </form>
 </q-page>

</template>


