<script setup>
import MenuBar from '../components/MenuBar.vue';
import TopBar from 'src/components/TopBar.vue';
import Toolbar from 'src/components/ToolbarMenu.vue';
import DockBar from 'src/components/DockBar.vue';
import DocumentExplorer from '../components/DocumentExplorer.vue'


</script>

<template>
  <q-layout view="hHh lpR fFf">

    <!-- HEADER AVEC LES BARRES TOPBAR ET MENUBAR -->
    <q-header class="bg-main">
      <TopBar />
      <MenuBar />
      <DocumentExplorer :explorerIsOpen="explorerIsOpen" :closeExplorer="closeExplorer" />

    </q-header>

    <!-- MAIN CONTENT -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- FOOTER AVEC DOCKBAR -->




  </q-layout>
</template>

