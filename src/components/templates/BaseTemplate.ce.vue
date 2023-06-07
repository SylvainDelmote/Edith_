<!-- On va juste tester le rendu InnerHTML pour l'instant -->
<script setup>
import {computed} from 'vue'

const props = defineProps({
    modelValue: Object
})
const innerHTML = computed(()=>{
    // Do Something 
    return props.modelValue.innerHTML
})





</script>


<template>
<div v-html=innerHTML>
</div>


</template>


<style>
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