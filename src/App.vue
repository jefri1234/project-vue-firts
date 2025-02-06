<template>
  <div class="bg-gray-900 min-h-screen flex flex-col text-white items-center justify-center">
    <h1>{{ jeffmensaje }}</h1>
    <button @click="Changevue">Cambiar a vue</button>
    <button @click="Changereact">Cambiar a react</button>
    <button @click="Reset">reset</button>
    <!-- Usar el componente jeff aquí -->
    <Jeff />
    <completo />
    <Hello  />
    <Tabs />
    <Swicht/>
   
  </div>
</template>



<script>
import Jeff from './components/jeff.vue';
import completo from './components/completo.vue';
import Hello from './components/hello.vue';
import Tabs from './components/tabs.vue'
import Swicht from './components/swicht.vue'


export default {

  components: {
    Jeff,  // Registrar el componente aquí
    completo,
    Hello,
    Tabs,
    Swicht
  },


  data() {
    return {
      welcome: 'welcome to the app VUE',
      jeffmensaje: 'jefferson obregon'
    };
  },
  methods: {
    Changevue() {
      this.jeffmensaje = '¡Hola, vue!';
    },
    Changereact() {
      this.jeffmensaje = '¡Hola, react!';
    },
    Reset() {
      this.jeffmensaje = this.welcome;
    },
  },

};
</script>


//scoped para asegurarte de que los estilos solo afecten a ese componente y no se filtren a otros.
<style scoped>
h1 {
  color: green;
}
</style>
