<script setup>
import {ref} from 'vue'
const props = defineProps(
   { lien:{
      type : String,
      default : 'https://placehold.co/200x100/png?text=Inserer+Image'
      
   }}
)

const url = ref(props.lien)
const container = ref()

function urlPrompt(){
   let urlUtilisateur = window.prompt('Copier l\'adresse de l\image' )
   if(urlUtilisateur.trim().length > 0){
      url.value = urlUtilisateur
   }
}

function handleClose() {
  container.value.remove()
}

function handleConfig() {
alert("config")
}


</script>

<template>
<div class="container" ref="container">
   <img  class="image" width="200" height='100' :src=url  @click="urlPrompt"/>
   <div class="close" @click="handleClose"> </div>

  
</div>

</template>


<style scoped>

.image{
   cursor: pointer;
}
.container {
  position: relative;

  width: fit-content;
}


.container:hover .close,
.container:focus .close {
  opacity: 1;
}


.close {
  position: absolute;
  right: 20px;
  top: 10px;
  width: 20px;
  height: 20px;
  opacity: 0;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
   position: absolute;
  left: 15px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

@media print {
    *[contenteditable="true"], input {
      background: none;
    }
    .hide-in-print {
      display: none;
    }
  }






</style>