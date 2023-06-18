<script setup>
const props = defineProps(['to', 'color'])

</script>
<template>
  <RouterLink :to=props.to>
    <q-card :class="`bg-${props.color}`" class="my-card" square>
      <q-card-section class="my-section">
        <q-parallax :height="150">
          <template v-slot:media>
            <video width="720" height="440" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
              <source v-if="props.to === 'lecteur'" type="video/mp4"
                src=https://assets.mixkit.co/videos/preview/mixkit-two-people-working-on-a-black-table-255-large.mp4>
              <source type="video/mp4"
                src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-computer-in-detail-4907-large.mp4">

            </video>
          </template>
        </q-parallax>


      </q-card-section>
      <q-card-section class="card-container my-section">
        <slot name="icone"></slot>
        <slot name="texte"></slot>
      </q-card-section>
    </q-card>
  </RouterLink>
</template>

<style scoped lang="scss">
.my-card {
  cursor: pointer;
  width: 500px;
  height: 400px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.my-section {
  padding: 0;
  margin: 0;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

video:first-child {
  filter: grayscale(100%);
  transition: 0.8s ease;

}

video:first-child:hover {
  filter: none;

}

.my-card:hover video:first-child,
.my-card:focus video:first-child {
  filter: none;
}
</style>