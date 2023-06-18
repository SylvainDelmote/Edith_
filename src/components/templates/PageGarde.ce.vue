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

<table class="titreEntete">
    <tr>
        <td>CONVENTION D'OBJECTIFS ET <br />DE FINANCEMENT</td>
    </tr>
</table>

<br>
<br>
<br>
<div contenteditable="true"  class=" soustitreEntete" >
  Enrichir le Sous Titre
  <br>
  Bonus associés


    <br>
   <br>
   <br>

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
.titreEntete {
font-size: 40px;
color: white;
background-color: #bcc4e6;
text-align: center;
height: 300px;
width: 100%;
font-weight: bold;
vertical-align: bottom;
}

.soustitreEntete {
font-size: 32px;
color: gray;
text-align: center;
vertical-align: middle;
max-height: 300px;
width: 100%;
     }


</style>

