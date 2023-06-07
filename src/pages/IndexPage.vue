<script setup>
import CardLink from 'src/components/CardLink.vue';

</script>

<template>
  <q-page class="flex flex-center">
    <CardLink to="editeur" color=var(--q-dark)> 

        <template #icone>
        <q-icon name="edit_note" size="5vw" />
        </template>
        <template #texte>
        <span class="text-h3">Editeur</span>

        </template>
    </CardLink>

    <CardLink to="lecteur"  color=var(--q-positive)>
      <template #icone>
        <q-icon name='library_books' size="5vw" />
      </template>
      <template #texte>
        <span class="text-h3">Lecteur</span>
      </template>
    </CardLink>
    

  </q-page>


</template>

