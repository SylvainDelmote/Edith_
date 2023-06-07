<script setup>
///// IMPORT ////// 
import { useAuth } from '@websanova/vue-auth'
import { api } from 'boot/axios'
import { onBeforeMount, ref, computed } from "vue"
import { useQuasar } from 'quasar'


/// VARIABLES  ////
const auth = useAuth();
const $q = useQuasar();
const userInfo = ref([]);  // L'objet qui va contenir les infos de l'utilisateur.  ( useAuth et  On Submit)
const options = ref([]);   //  Le tableau qui va récuperer les différents rôles HABNIMS disponibles dans l'application (OnBeforeMount)
const isDev = computed( ()=> process.env.DEBUGGING ) // Si DEBUG activé les INPUT sont accessibles en modification . +info debugging :  https://quasar.dev/quasar-cli-vite/handling-process-env#values-provided-by-quasar-cli
const isDisabled = !ref(isDev); // Desactive l'accès aux parametres en ecriture (utilisé dans le template au niveau de chacun des inputs )

/// FUNCTIONS ////
function onSubmit() {
  api
    .post('/auth/profil', userInfo.value)
    .then(() => {
      $q.notify({
        message: 'Mis à jour du compte ' + userInfo.value.username + ' avec le rôle : ' + userInfo.value.role_habnims,
        color: 'positive'
      })
      // auth
      //   .login({
      //     fetchUser: true,
      //     data: '',
      //     staySignedIn: true
      //   })
    })
    .catch(error => {
      $q.notify({
        message: 'Error: ' + error.response.status,
        color: 'negative'
      })
    })
}

/// LIFECYCLE /////
onBeforeMount(() => {
  userInfo.value = auth.user()

  api
    .get('/auth/roles')
    .then(response => {
      response.data.rolesHabnims.forEach(element => {
        const opt = {}
        opt.label = element
        opt.value = element
        options.value.push(opt)
      })
    })
    .catch(error => {
      $q.notify({
        message: 'Error: ' + error.data,
        color: 'negative'
      })
    })
})

</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="bg-secondary q-py-xl flex justify-evenly my-card-large" >
      <!-- FORM -->
      <q-form @submit="onSubmit">
        <!-- TITRE -->
        <q-card-section>
          <p class="text-h4">{{ $t('securite.profil') }}</p>  
        </q-card-section>
        <!-- INPUTS -->
        <q-card-section class="q-gutter-lg">
            <!-- IDENTIFIANT -->
            <q-input :disable=true color="accent" square standout="bg-accent" v-model="userInfo.username" class="my-input" label="Identifiant"> 
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <!-- CODE ORGA  -->
            <q-input :disable="isDisabled" color="accent" square standout="bg-accent" v-model="userInfo.code_orga"
              label="Code organisme" class="my-input" >
              <template v-slot:prepend>
                <q-icon name="apartment" />
              </template>

            </q-input>
            <!-- HABNIMS -->
            <q-select :disable="isDisabled" color="accent" square standout="bg-accent" v-model="userInfo.role_habnims" :options="options"
              label="Rôle Habnims"  class="my-input">
              <template v-slot:prepend>
                <q-icon name="keyboard" />
              </template>
            </q-select>

          </q-card-section>
      
        <q-space />
        <!-- BUTTON -->
        <q-card-actions align="left" >
          <q-btn :disable="isDisabled"  color="primary" icon="save" label="Enregistrer" no-caps type="submit" class="q-ml-sm" />
        </q-card-actions>
      </q-form>
      <!-- SEPARATEUR VERTICAL -->
      <q-separator class="gt-md" spaced inset vertical  />
      <!-- ILLUSTRATION -->
      <div class="flex flex-center gt-md">
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> 
        <g clip-path="url(#clip0_238_1296)"> 
          <path fill-rule="evenodd" clip-rule="evenodd" d="M100 0H0L100 100H0L100 200H200L100 100H200L100 0Z" fill="url(#paint0_linear_238_1296)"/> 
        </g> <defs> 
          <linearGradient id="paint0_linear_238_1296" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse"> 
            <stop stop-color="#5E81AC"/> <stop offset="1" stop-color="#8FBCBB"/> </linearGradient> <clipPath id="clip0_238_1296"> 
              <rect width="200" height="200" fill="white"/> </clipPath> </defs> 
        </svg>
      </div>
      
    </q-card>


  </q-page>
</template>

<style lang="scss" scoped>
.my-input{
  max-width:300px;
}

.my-card-large{
  width: 45vw; 
  height: 55vh; 
  min-width: 300px; 
  min-height: 500px; 

}
</style>
