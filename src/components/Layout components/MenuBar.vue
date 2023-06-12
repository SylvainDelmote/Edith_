<script setup>
// IMPORT
import { ref, watch } from 'vue'
import {useAuth} from '@websanova/vue-auth'


const emit = defineEmits(['exportIt', 'newDoc'])

// PROPS
const $auth = useAuth()
const userIsLoggedIn = $auth.check()
const reseau = ref(false)
const colorMode = ref(false)
const darkModeIsEnabled = ref(false)
const user = ref( $auth.user() )
import { useQuasar } from 'quasar'
const $q = useQuasar()
const MenuIsOpen = ref(false)

const toggleDarkMode = () => {
  $q.dark.toggle()
}

watch(darkModeIsEnabled, toggleDarkMode)


</script>

<template>
<q-bar>
  <div  > 
    <q-btn flat no-caps size="14px"   color="white" label="Fichier">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click="()=>emit('newDoc')"   >
              <q-item-section>Nouveau document  </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section> Importer un modele  </q-item-section>
            </q-item>
            <q-separator />
                   <q-item clickable v-close-popup>
              <q-item-section>Sauvegarder comme modele</q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>Sauvegarder en local</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="()=>emit('exportIt') ">
              <q-item-section>Exporter</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

    <q-btn :disable=!userIsLoggedIn flat no-caps size="14px"  color="white" label="Edition">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Copier</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Coller</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recents</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Historique</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-btn>

    <q-btn :disable=!userIsLoggedIn flat no-caps size="14px"   color="white" label="Affichage">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn :disable=!userIsLoggedIn flat no-caps  size="14px" color="white" label="Fenêtre">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>

        <q-btn :disable=!userIsLoggedIn flat no-caps size="14px"  color="white" label="Aide">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section> Aide en Ligne </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section> Signaler un probleme </q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-btn>
  </div>
<q-space />

</q-bar>
</template>