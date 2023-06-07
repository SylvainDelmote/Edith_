<script setup>
import {ref} from 'vue'
const props = defineProps(
   { lien:{
      type : String,
      default : 'https://placehold.co/200x100/png?text=Inserer+Image'
      
   }}
)

const url = ref(props.lien)

function urlPrompt(){
   let urlUtilisateur = window.prompt('Copier l\'adresse de l\image' )
   if(urlUtilisateur.trim().length > 0){
      url.value = urlUtilisateur
   }
}

</script>

<template>

<img  class="image" width="200" height='100' :src=url  @click="urlPrompt"/>

</template>


<style scoped>

.image{
   cursor: pointer;
}


</style>