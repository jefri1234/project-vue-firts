<template>
  <div class="bg-gray-950 h-full flex flex-col text-white items-center justify-center w-full">
    <Navbar/>
    <!-- Aquí se renderizarán las vistas según la ruta -->
    <router-view></router-view>
   
  </div>
</template>

<script>
import Jeff from './components/jeff.vue';
import completo from './components/completo.vue';
import Hello from './components/hello.vue';
import Tabs from './components/tabs.vue'
import Swicht from './components/swicht.vue'
import Navbar from './components/navbart.vue'


export default {

  name: 'App',
  components: {
    Jeff,  // Registrar el componente aquí
    completo,
    Hello,
    Tabs,
    Swicht,
    Navbar
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
