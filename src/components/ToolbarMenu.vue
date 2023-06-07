<script setup>
import VueFileToolbarMenu from 'vue-file-toolbar-menu';
import {ref,computed} from "vue";

const display = ref("horizontal") // ["grid", "vertical", "horizontal"]
const formatMenu =  computed( ()=> {
  return   [
    { icon: "format_align_left", title: "Aligner à gauche",   click: () => document.execCommand("justifyLeft") },
    { icon: "format_align_center", title: "Centrer",   click: () => document.execCommand("justifyCenter") },
    { icon: "format_align_right", title: "Aligner à droite",   click: () => document.execCommand("justifyRight") },
    { icon: "format_align_justify", title: "Justifier",  click: () => document.execCommand("justifyFull") },
    
    { is: "separator" },

    { icon: "format_bold", title: "Gras",  click: () => document.execCommand("bold") },
    { icon: "format_italic", title: "Italique", click: () => document.execCommand("italic") },
    { icon: "format_underline", title: "Souligné",  click: () => document.execCommand("underline") },
    { icon: "format_strikethrough", title: "Barré",  click: () => document.execCommand("strikethrough") },

    { is: "separator" },
    // { icon: "format_list_bulleted", title: "Puces",  click: () => document.execCommand("insertUnorderedList") },
    // { icon: "format_list_numbered", title: "Numérotation",  click: () => document.execCommand("insertOrderedList") },
    { html: "<b>H1</b>", title: "Titre 1",  click: () => document.execCommand('formatBlock', false, '<h1>') },
    { html: "<b>H2</b>", title: "Titre 2",  click: () => document.execCommand('formatBlock', false, '<h2>') },
    { html: "<b>H3</b>", title: "Titre 3",  click: () => document.execCommand('formatBlock', false, '<h3>') },
      // { icon: "splitscreen", title: "Page break", click: () => this.insertPageBreak() },
      { is: "separator" },
    { icon: "format_clear", title: "Effacer la mise en forme", click () { document.execCommand('removeFormat'); document.execCommand('formatBlock', false, '<div>'); } },
    { is: "separator" },

    { // Display mode menu
      title: "Affichage",
      icon: display.value == "horizontal" ? "view_column" : (display.value == "vertical" ? "view_stream" : "view_module"),
      chevron: true,
      menu: [{
        icon: "view_module",
        active:display.value == "grid",
        click: () => { display.value = "grid"; }
      }, {
        icon: "view_column",
        active: display.value == "horizontal",
        click: () => {display.value = "horizontal"; }
      }, {
        icon: "view_stream",
        active:display.value == "vertical",
        click: () => {display.value = "vertical"; }
      }],
      menu_width: 55,
      menu_class: "align-right"
    }
  ]
} )


</script>


<template>
<vue-file-toolbar-menu 
:content="formatMenu" 
class="bar"
/>

</template>

<style scoped>
.bar {
  position: sticky;
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

</style>