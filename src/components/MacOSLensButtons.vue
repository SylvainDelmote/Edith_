<script setup>
const emit = defineEmits(['redLens', 'yellowLens', 'greenLens'])
</script>


<template>
    <div>
        <!-- RED -->
        <q-btn @click="emit('redLens')" dense flat round icon="lens" size="8.5px" color="negative">
            <q-tooltip class="bg-negative">Fermer </q-tooltip>
        </q-btn>
        <!-- YELLOW -->
        <q-btn @click="emit('yellowLens')" dense flat round icon="lens" size="8.5px" color="info">
            <q-tooltip class="bg-warning"> Reduire </q-tooltip>
        </q-btn>

        <!-- GREEN -->
        <q-btn @click="emit('greenLens')" dense flat round icon="lens" size="8.5px" color="positive">
            <q-tooltip class="bg-positive text-body-2"> Agrandir </q-tooltip>
        </q-btn>
    </div>
</template>