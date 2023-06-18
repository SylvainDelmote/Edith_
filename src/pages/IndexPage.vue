<script setup>
import CardLink from 'src/components/CardLink.vue';

</script>

<template>
  <q-page>

    <div class="title">Edith</div>

    <div class="flex flex-center">
      <CardLink to="editeur" color='elevated'>

        <template #icone>
          <q-icon name="edit_note" size="3vw" />
        </template>
        <template #texte>
          <span class="text-h3">Editeur</span>

        </template>
      </CardLink>

      <CardLink to="lecteur" color='elevated'>
        <template #icone>
          <q-icon name='library_books' size="3vw" />
        </template>
        <template #texte>
          <span class="text-h3">Lecteur</span>
        </template>
      </CardLink>
    </div>

  </q-page>
</template>


<style>
.title {
  font-family: customfont;
  letter-spacing: 1.2rem;
  font-size: 5rem;
  text-align: center;
}

.title::first-letter {
  font-size: 10rem;
}
</style>
