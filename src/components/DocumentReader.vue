<script setup>
// IMPORT
import VueDocumentEditor from '../../module/vue-document-editor'
import { ref, onBeforeMount } from 'vue'
import { importFromStorage } from '../composables/SessionStorageServices'

// VARIABLES
const contenu = ref()

//LIFECYCLE 
// SETUP

// BEFORE MOUNT
onBeforeMount(() => {
  contenu.value = importFromStorage()
})



</script>

<template>
  <q-page class="flex flex-center">
    <form autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" class="text-main">
      <VueDocumentEditor v-model:content=contenu :editable=false />
    </form>
  </q-page>
</template>


