<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: 'timeline'
    },
    tooltip: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false
    },

}

)
</script>

<template>
    <q-btn class="btn" color="accent" rounded dense glossy :icon=props.icon :label=props.label @click="props.method"
        :disabled=props.disabled>
        <q-tooltip>
            {{ props.tooltip }}
        </q-tooltip>
    </q-btn>
</template>

<style scoped>
.btn {
    padding: 1rem;
    width: 7rem;
    height: 4rem;
    border: 1px solid lightgrey;
    cursor: pointer;
}

.btn:hover {
    filter: brightness(1.03);
}
</style>

