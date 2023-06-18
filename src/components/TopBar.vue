<script setup>
import { ref, watch } from 'vue'
import { useAuth } from '@websanova/vue-auth'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import MacOSLensButtons from "./MacOSLensButtons.vue";



const $q = useQuasar()
const router = useRouter()
const $auth = useAuth()
const userIsLoggedIn = $auth.check()
const darkModeIsEnabled = ref(false)
const search = ref('')
const splitModeIsEnabled = ref(true)


const toggleDarkMode = () => {
  darkModeIsEnabled.value = !darkModeIsEnabled.value
}

const toggleSplitMode = () => {
  splitModeIsEnabled.value = !splitModeIsEnabled.value
}

const toggleFullScreen = () => {
  alert('TO DO')
}

watch(darkModeIsEnabled, () => $q.dark.toggle())
watch(splitModeIsEnabled, () => router.push(splitModeIsEnabled.value ? '/editeur' : '/mixte'))

</script>

<template>
  <q-bar class="contrasted">
    <mac-o-s-lens-buttons @redLens="() => { router.push('/') }" @yellowLens="() => { }" @greenLens="() => { }" />

    <q-space />
    <div>
      <q-btn dense flat to="/profil" :icon="userIsLoggedIn ? 'wifi' : 'wifi_off'" @click="reseau = !reseau">
        <q-tooltip> {{ userIsLoggedIn ? 'Connecté' : 'Non connecté' }} </q-tooltip>
      </q-btn>
      <q-btn dense flat :icon="darkModeIsEnabled ? 'light_mode' : 'dark_mode'" @click="toggleDarkMode">
        <q-tooltip> {{ darkModeIsEnabled ? ' mode clair' : ' mode sombre' }}</q-tooltip>

      </q-btn>
      <q-btn dense flat icon="search">
        <q-tooltip>Search</q-tooltip>
        <q-popup-edit v-model="search" auto-save v-slot="scope">
          <q-input placeholder="To Do..." v-model="scope.value" dense autofocus @keyup.enter="scope.set" />
        </q-popup-edit>
      </q-btn>


    </div>




  </q-bar>
</template>