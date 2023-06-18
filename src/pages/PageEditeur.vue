<script setup>
import DocumentEditor from 'src/components/DocumentEditor.vue';

const props = defineProps({
  data:Object,
  updateData : Function, 
})


</script>

<template>
  <q-page class="flex flex-center">
    <DocumentEditor :data= props.data   :updateData=updateData />
  </q-page>


</template>

