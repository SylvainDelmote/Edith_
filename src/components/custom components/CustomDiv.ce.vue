<script setup>
import { ref } from 'vue'
const tailleParDefaut = 5
const container = ref(null)

function handleClose() {
  container.value.remove()
}

function handleConfig() {
alert("config")
}


</script>

<template>

  <div contenteditable="true"  class="editable container" ref="container">
    <br  v-for="n in tailleParDefaut" :key="n">
      <div class="buttons">
     <button class="close-button" @click="handleClose">X </button>
    <button class="config-button" @click="handleConfig" > O </button>
    </div>

  </div>



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
  top: 10px; /* Ajustez la position verticale des boutons selon vos besoins */
  right: 10px; /* Ajustez la position horizontale des boutons selon vos besoins */
  transition: opacity 0.3s ease;
  opacity: 0;
}
.container:hover .buttons,
.container:focus .buttons {
  opacity: 1;
}




</style>