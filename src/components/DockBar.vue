<script setup>
import {componentFactory} from '../composables/ComponentFactory.js'
import DockButton from './DockButton.vue';
const emit = defineEmits(['editable','bloc','checkbox', 'image', 'numpage', 'piedpage', 'html', 'lecteur'])

</script>

<template>
<q-btn-group rounded>
    <DockButton icon="format_shapes"  tooltip="Selection editable"   @click="componentFactory('span')"/>
    <DockButton icon= 'web_asset'  tooltip="Paragraphe editable"   @click="componentFactory('div')"/>
    <DockButton icon= 'rule'   tooltip="Options editable"  @click="componentFactory('checkbox')"/>
    <DockButton icon="image"   tooltip="Image"  @click="componentFactory('img')"/>
</q-btn-group>

</template>

<style scoped>
.wrapper{
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
}

.btn{
    padding: 1rem;
    width: 7rem;
    height: 4rem;
    border: 1px solid lightgrey;
    cursor: pointer;
}
.btn:hover{
    filter: brightness(1.03);
}
</style>

<!-- 
    <button class="btn" @click="emit('numpage')">NumeroPage</button>
    <button class="btn" @click="emit('piedpage')">PiedPage</button>
    <button class="btn" @click="emit('html')">HTML</button>
    <button class="btn" @click="emit('lecteur')"> Mode Lecteur </button>
 -->