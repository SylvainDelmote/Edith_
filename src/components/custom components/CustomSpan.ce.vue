<script setup>
import {ref} from 'vue'

const props = defineProps({
    motInitial: String
  })
const word = ref(props.motInitial)
const container = ref()

function handleClose() {
  const childElements = container.value.children
  const editableSpan = childElements[0]
  const buttonsContainer = childElements[1]
  editableSpan.classList.remove('editable')
  editableSpan.setAttribute('contentEditable', 'true')
  buttonsContainer.remove()

}





</script>

<template>
  <span class="container" ref="container" >
  <span  contenteditable="true"   v-html=word class="editable"/> 
  <div class="close" @click="handleClose"> </div>

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
.container:hover .close,
.container:focus .close {
  opacity: 1;
}


.close {
  position: absolute;
  right: 0px;
  top:  10px;
  width: 10px;
  height: 10px;
  opacity: 0;
  cursor: pointer;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 10px;
  top: -20px;
  content: ' ';
  height: 10px;
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