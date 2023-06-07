<script setup>
const props = defineProps(['to', 'color'])

</script>
<template>
<RouterLink :to=props.to >
    <q-card class="my-card" square="" >       
        <q-card-section class="card-container">
            <slot  name="icone"></slot>
            <slot name="texte"></slot>
        </q-card-section>
    </q-card>
</RouterLink>


</template>

<style scoped lang="scss">
.my-card{
    margin: 1rem;
    cursor: pointer;
    padding: 5vw 15vw ;
   
    background-color: v-bind(color);
}
.card-container {
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
}
</style>