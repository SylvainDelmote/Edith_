<script setup>
import MenuBar from '../components/Layout components/MenuBar.vue';
import TopBar from 'src/components//Layout components/TopBar.vue';
import DockBar from 'src/components/DockBar.vue';


</script>

<template>
<q-layout  view="hHh lpR fFf">
  <q-header class="bg-main">
    <TopBar />
    <MenuBar />
  </q-header>

  <q-page-container>
    <router-view />
  </q-page-container>
  <q-footer reveal class="bg-transparent flex flex-center q-pb-md">
    <DockBar />
  </q-footer>
</q-layout>
</template>

