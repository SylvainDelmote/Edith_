<script setup>
import { ref, computed } from 'vue'

const contenuA = ref('Contenu A')
const contenuB = ref ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, porro.')

const contenuASelectionne = ref(false)
const contenuBSelectionne = ref(false)

const contenuEditable = computed( ()=>true )


</script>


<template>
  <div class="checkbox-wrapper">
    <div v-if="!contenuBSelectionne">
      <input type="checkbox" v-model="contenuASelectionne" :value="contenuA"  >
      <label  for="contenuA" :contenteditable=contenuEditable class="editable" >{{contenuA}}</label>
    </div>
    <div v-if="!contenuASelectionne">
      <input type="checkbox" v-model="contenuBSelectionne" :value="contenuB" >
      <label   for="contenuB" :contenteditable=contenuEditable class="editable" >{{contenuB}}</label>
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

.checkbox-wrapper{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>