<script setup>
import { ref, computed } from 'vue'

const contenuA = ref('Choix A')
const contenuB = ref ('Choix B')
const contenuASelectionne = ref(false)
const contenuBSelectionne = ref(false)
const contenuEditable = computed( ()=>true )
const container = ref(null)

function handleClose() {
  container.value.remove()
}

function handleConfig() {
alert("config")
}



</script>


<template>
  <div class="checkbox-wrapper container" ref="container">
    <div v-if="!contenuBSelectionne">
      <input type="checkbox" v-model="contenuASelectionne" :value="contenuA"  >
      <label  for="contenuA" :contenteditable=contenuEditable class="editable" >{{contenuA}}</label>
    </div>
    <div v-if="!contenuASelectionne">
      <input type="checkbox" v-model="contenuBSelectionne" :value="contenuB" >
      <label   for="contenuB" :contenteditable=contenuEditable class="editable" >{{contenuB}}</label>
    </div>
    <div class="close" @click="handleClose" > </div>
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

.checkbox-wrapper{
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
.container:hover .close,
.container:focus .close {
  opacity: 1;
}

.close {
  position: absolute;
  right: 10px;
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




</style>