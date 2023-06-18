<script setup>
// IMPORT
import { saveToStorage } from "../composables/SessionStorageServices"
import { saveToDatabase } from "../composables/DatabaseServices"
import { ref } from 'vue'
// VARIABLE

const explorerIsOpen = ref(false)
const closeExplorer = () => { explorerIsOpen.value = false }

// PROPS ET EMITS


//FUNCTION 
function handleClick() {
  alert('TODO')
}
</script>

<template>
  <q-bar class="contrasted">
    <q-btn flat no-caps size="14px" label="Fichier">
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item clickable v-close-popup @click=handleClick>
            <q-item-section> Nouveau Document </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click='explorerIsOpen = true'>
            <q-item-section> Ouvrir un document </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup @click="() => { saveToStorage(); saveToDatabase() }">
            <q-item-section>Sauvegarder en Base de Données</q-item-section>
          </q-item>

          <q-item clickable v-close-popup @click="() => saveToStorage()">
            <q-item-section>Sauvegarder en local</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup to="/">
            <q-item-section>Fermer le Document</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn flat no-caps size="14px" label="Edition">
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

    <q-btn flat no-caps size="14px" label="Affichage">
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

    <q-btn flat no-caps size="14px" label="Fenêtre">
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

    <q-btn flat no-caps size="14px" label="Aide">
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

    <q-space />
  </q-bar>
  <slot :explorerIsOpen=explorerIsOpen :closeExplorer=closeExplorer></slot>
</template>