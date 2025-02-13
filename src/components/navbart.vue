<template>
  <nav class="bg-gray-800 p-4 w-full">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between ">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
              viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 text-white font-bold text-xl">
            Mi App
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">

              <router-link to="/"
                class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Inicio</router-link>
              <router-link to="/about"
                class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Acerca de</router-link>
              <router-link to="/services"
                class="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Servicios</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#" class="text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
        <a href="#" class="text-white block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
        <a href="#" class="text-white block px-3 py-2 rounded-md text-base font-medium">Acerca de</a>
        <a href="#" class="text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
/* Personaliza aquí si necesitas algo más */
</style>
