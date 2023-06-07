<script setup>
import {ref} from 'vue'

const props = defineProps({
    motInitial: String
  })
const editableSpan = ref('LOOREMZ')
const buttonContainer = ref(null)
const nouveauMot = ref('')
const mot = ref(props.motInitial)

function handleClose() {
  editableSpan.value.setAttribute("contenteditable", "false")
  editableSpan.value.classList.remove("editable")}
  buttonContainer.value.remove()

function handleConfig() {
alert("config")
}





</script>

<template>
  <span class="container" >
  <span  ref="editableSpan" contenteditable="true"   v-html = mot class="editable"/> 
  <div class="buttons" ref="buttonContainer">
    <button class="close-button" @click="handleClose">X </button>
    <button class="config-button" @click="handleConfig" > O </button>
  </div>
  </span>

</template>



<style scoped>
.editable {
  background: rgba(155, 155, 173, 0.4);
  border-radius: 10px;
  border: 2px solid black;
  margin: auto;
  cursor: pointer;
  padding: 1px;
  margin: 1px;
}

.container {
  position: relative;
}

.buttons {
  position: absolute;
  bottom: 30px; /* Ajustez la position verticale des boutons selon vos besoins */
  left: 50px; /* Ajustez la position horizontale des boutons selon vos besoins */
  transition: opacity 0.3s ease;
  opacity: 0;
}
.container:hover .buttons,
.container:focus .buttons {
  opacity: 1;
}




</style>