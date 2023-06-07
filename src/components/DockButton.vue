<script setup>
const props = defineProps({
    icon:{
        type: String,
        default: 'timeline'
    }, 
    tooltip:{
        type: String,
    },
    disabled:{
        type: Boolean,
        default: false
    },

}

)
</script>
<template>
    <q-btn 
    class="btn"
    color="dark" 
    rounded
    dense
    glossy
    :icon=props.icon 
    :label=props.label 
    @click="props.method"
    :disabled=props.disabled
    >
    <q-tooltip>
        {{props.tooltip}}
    </q-tooltip>
    </q-btn>
</template>