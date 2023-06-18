<!-- On va juste tester le rendu InnerHTML pour l'instant -->
<script setup>

import {computed} from 'vue'
import charte from '../../assets/chartelaicite.png'
const props = defineProps({
    modelValue: Object
})
const innerHTML = computed(()=>{
    // Do Something 
    return props.modelValue.innerHTML
})





</script>


<template>
<div class="container" ref="container">
     <img  class="image" width="625" height='931' :src= charte />
</div>


</template>


<style>

</style>