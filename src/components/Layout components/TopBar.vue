<script setup>
const emit = defineEmits(['red', 'yellow', 'green'])
</script>

<template>
<q-bar class="bg-dark">
    <div> <!-- IOS Control Btns -->
        <!-- RED -->
        <q-btn @click= "() => emit('red')" dense flat round icon="lens" size="8.5px" color="negative">
            <q-tooltip  class="bg-negative"> Fermer </q-tooltip>
        </q-btn>
         <!-- YELLOW -->
        <q-btn @click= "() => emit('yellow')" dense flat round icon="lens" size="8.5px" color="info">
            <q-tooltip class="bg-warning" > ToDo </q-tooltip>
        </q-btn>

        <!-- GREEN -->
        <q-btn @click= "() => emit('green')"  dense flat round icon="lens" size="8.5px" color="positive">
            <q-tooltip  class="bg-positive text-body-2"> Plein Ecran </q-tooltip>
        </q-btn>
    </div>
    <q-space />
    <div>
  <q-btn dense flat :icon= "userIsLoggedIn ? 'wifi' :  'wifi_off'"  @click="reseau = !reseau">
    <q-tooltip> {{userIsLoggedIn ?  'Connecté': 'Non connecté' }} </q-tooltip>
  </q-btn>  
  <q-btn dense flat icon= "sunny" @click="colorMode = !colorMode" />
  <q-btn dense flat icon="search" />
</div>


<!-- Pop Up Reseau -->
<q-dialog
  v-model="reseau"
>
<q-card style="width: 300px" class="bg-secondary">
  <q-card-section  v-if="userIsLoggedIn">
    <q-card-section>
    <div class="text-h6"> Utilisateur Identifié  </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
    <ul  class="q-gutter-sm ">
      <li>{{ user.prenom }}  {{ user.nom }}   </li>
    
      <li>  {{ user.role_habnims }} </li>
      <li> Environnement : {{ user.env }} </li>
    </ul>
    </q-card-section>
  </q-card-section>
  <q-card-section v-else class="bg-info text-white">
    Probleme de connexion 
  </q-card-section>

  <q-card-actions align="right" class="bg-main">
    <q-btn v-if="userIsLoggedIn" flat label="OK" v-close-popup />.
    <q-btn v-if="!userIsLoggedIn" flat  label="Reconnecter" @click="$auth.login() "/>

  </q-card-actions>
</q-card>
</q-dialog>

<!-- Pop Up Color Mode -->
<q-dialog
  v-model="colorMode"
>
<q-card style="width: 300px" class="bg-secondary">
  
    <q-card-section>
    <div class="text-h6"> Dark Mode  </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-toggle
        v-model="darkModeIsEnabled"
        color="accent"
        keep-color
        left-label
        checked-icon="dark_mode"
        unchecked-icon="light_mode"
>
<q-tooltip >
{{ isDark ? "Dark Mode" :" Light Mode"}}
</q-tooltip>
</q-toggle>

  
    </q-card-section>


  <q-card-actions align="right" class="bg-main">
    <q-btn  flat label="OK" v-close-popup />.

  </q-card-actions>
</q-card>
</q-dialog>




  </q-bar>
</template>