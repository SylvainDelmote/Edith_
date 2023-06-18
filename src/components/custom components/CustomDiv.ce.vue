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
     <div class="close" @click="handleClose"> </div>
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