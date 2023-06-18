
<script setup>
import { ref } from 'vue'
import MacOSLensButtons from "./MacOSLensButtons.vue";
import {getAllDocument} from '../composables/DatabaseServices'


const { data, error } = getAllDocument()
const explorerIsMaxed = ref(false)

const props = defineProps(
    {
        explorerIsOpen : {
            type:Boolean,
            default : false
        },
        closeExplorer : {
            type : Function
        }
    }
)

</script>



<template>
    <div v-if="props.explorerIsOpen  " class="q-pa-md">
      <q-layout
        view="lHh LpR lff"
        container
        class="shadow-8 fileExplorer"
        :class=" explorerIsMaxed ? 'maxheight':'defaultheight' "

      >
        <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-accent'">
            <MacOSLensButtons 
                @redLens = "()=>{ props.closeExplorer() }"
                @yellowLens ="()=>{ explorerIsMaxed = !explorerIsMaxed}"        
                @greenLens = handleRed()
            
            />
        </q-header>
  
        <q-footer  v-if="error">
            <pre> {{error}}</pre>
        </q-footer>

        <q-page-container>
          <q-page  style="padding-top: 60px" class="q-pa-md ">
            <div class="q-gutter-md row  justify-start">
                <q-card   v-for="each in data" :key="each.id" class="bg-dark" style="width: 250px">
                    <q-card-section>
                    <div class="text-caption2">"{{ each.documentName }}"</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-section>
                        <q-skeleton   animation="wave" />
                    </q-card-section>
                </q-card>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </template>


<style scoped>

.fileExplorer{
border-radius: 12px;
background: var(--q-main);
backdrop-filter: blur( 10px );
position: absolute;
top:150px;
z-index: 33;
opacity: 1;
overflow: hidden;
height: 50vh;
width: 90vw;
margin: 0 3rem; 
}
.maxheight{
    height: 100vh !important;
    width: 100vw !important;
    backdrop-filter:100px;
    margin: 0; 
    position:absolute;
    left: 0;
    top:10px;
    z-index: 99;
}

.defaultheight{
    height:50vh !important;
    width: 80vw !important;
 
}
</style>