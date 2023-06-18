<script setup>
import { componentFactory } from '../composables/ComponentFactory.js'
import DockButton from './DockButton.vue';
const emit = defineEmits(['editable', 'bloc', 'checkbox', 'image', 'numpage', 'piedpage', 'html', 'lecteur'])

</script>

<template>
    <q-btn-group rounded>
        <DockButton icon="format_shapes" tooltip="Selection editable" @click="componentFactory('span')" />
        <DockButton icon='web_asset' tooltip="Paragraphe editable" @click="componentFactory('div')" />
        <DockButton icon='rule' tooltip="Options editable" @click="componentFactory('checkbox')" />
        <DockButton icon="image" tooltip="Image" @click="componentFactory('img')" />
    </q-btn-group>
</template>

