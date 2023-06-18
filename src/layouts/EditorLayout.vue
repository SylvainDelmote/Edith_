<script setup>
import MenuBar from '../components/MenuBar.vue';
import TopBar from 'src/components/TopBar.vue';
import Toolbar from 'src/components/ToolbarMenu.vue';
import DockBar from 'src/components/DockBar.vue';
import DocumentExplorer from '../components/DocumentExplorer.vue'


</script>

<template>
<q-layout  view="hHh lpR fFf">

  <!-- HEADER AVEC LES BARRES TOPBAR ET MENUBAR -->
    <q-header class="bg-main" >
      <TopBar />
      <MenuBar v-slot="{explorerIsOpen, closeExplorer}" >
        <DocumentExplorer :explorerIsOpen="explorerIsOpen" :closeExplorer="closeExplorer" />
      </MenuBar>  
      <Toolbar />
       
    </q-header>

  <!-- MAIN CONTENT -->
    <q-page-container>
      <router-view  />
    </q-page-container>

   <!-- FOOTER AVEC DOCKBAR -->
    <q-footer  class="bg-transparent flex flex-center q-pb-md" style="height: 20vh;  z-index: 2; " >
      <DockBar />
    </q-footer>
  


</q-layout>
</template>

