<script setup>
// IMPORT
import { ref, computed, markRaw, onBeforeMount } from "vue";
import VueDocumentEditor from '../../module/vue-document-editor'
import PageGarde from "./templates/PageGarde.ce.vue";
import CharteLaicite from "./templates/CharteLaicite.ce.vue";
import { importFromStorage } from '../composables/SessionStorageServices'

//PROPS & EMITS

// VARIABLES
const defaultValue = [
  { template: markRaw(PageGarde), props: { innerHTML: '' } },
  "",
  { template: markRaw(CharteLaicite) }
]
const contenu = ref()
const documentEstEditable = ref(true)
const numeroPageEstAffiche = ref(true)
const contenuPiedPage = ref("Exemple")

//FONCTIONS

function activerNumeroPage() {
  numeroPageEstAffiche.value = !numeroPageEstAffiche.value
}

function editerContenuPiedPage(nouveauContenu) {
  if (!nouveauContenu) {
    nouveauContenu = window.prompt('Contenu du Pied de page ?')
  }
  contenuPiedPage.value = nouveauContenu
}

function gererPiedPage(page, total) {

  const numeroPage = computed(() => numeroPageEstAffiche.value ?
    '<div style="position: absolute; bottom: 8mm; ' + ((page % 2) ? 'right' : 'right') + ': 10mm">Page ' + page + ' sur ' + total + '</div>'
    : ''
  )

  const exEntete = '<div style="position: absolute; left: 0; top: 0; right: 0; padding: 3mm 5mm; background: rgba(200, 220, 240, 0.5)"><strong>MYCOMPANY</strong> example.com /// This is a custom header overlay</div>';
  const exPiedPage = `<div style="position: absolute; left: 10mm; right: 10mm; bottom: 5mm; text-align:center; font-size:10pt" >${contenuPiedPage.value}</div>`;
  let html = numeroPage.value + exPiedPage;
  return html;
}

function onPaste(evt) {
  evt.preventDefault()
  evt.stopPropagation()

  const selection = window.getSelection();
  selection.getRangeAt(0).insertNode(document.createTextNode(text));
  selection.collapseToEnd();

}

//LIFECYCLE

onBeforeMount(() => {
  const importedContent = importFromStorage()

  importedContent.length > 1 ?
    contenu.value = importedContent :
    contenu.value = defaultValue
})

</script>

<template>
  <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" class="text-main">
    <VueDocumentEditor v-model:content="contenu" :editable="documentEstEditable" :overlay="gererPiedPage" />

  </form>
</template>


<!-- 


 -->