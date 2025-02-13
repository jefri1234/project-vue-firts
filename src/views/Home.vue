<template>
  <div class="container mx-auto p-6 ">
    <!-- Título principal -->
    <h1 class="text-5xl font-bold text-center text-blue-600 mb-6">Bienvenido a [Nombre de tu Empresa]</h1>

    <!-- Sección de bienvenida -->
    <section class="bg-blue-100 p-6 rounded-lg shadow-lg mb-8">
      <h2 class="text-3xl font-semibold text-blue-600 mb-4">¡Estamos aquí para ayudarte a crecer!</h2>
      <p class="text-lg text-gray-700">
        En [Nombre de tu Empresa], ofrecemos soluciones digitales innovadoras que impulsan el crecimiento de tu negocio. Ya sea que necesites desarrollo web, marketing digital o estrategias personalizadas, ¡estamos aquí para hacerlo posible!
      </p>
    </section>

    <!-- Servicios destacados -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="service-card p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
        <h3 class="text-xl font-bold text-blue-600 mb-2">Desarrollo Web</h3>
        <p class="text-gray-700 mb-4">Creamos sitios web personalizados y adaptados a las necesidades de tu negocio.</p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Más Información</button>
      </div>

      <div class="service-card p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
        <h3 class="text-xl font-bold text-blue-600 mb-2">Marketing Digital</h3>
        <p class="text-gray-700 mb-4">Aumenta tu visibilidad y llega a tu público objetivo con campañas efectivas de marketing digital.</p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Más Información</button>
      </div>

      <div class="service-card p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
        <h3 class="text-xl font-bold text-blue-600 mb-2">Consultoría SEO</h3>
        <p class="text-gray-700 mb-4">Mejora tu posicionamiento en los motores de búsqueda con estrategias SEO personalizadas.</p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Más Información</button>
      </div>
    </section>

    <!-- Llamado a la acción -->
    <div class="mt-10 text-center">
      <h2 class="text-2xl font-bold text-blue-600 mb-4">¡Comienza Hoy!</h2>
      <p class="text-lg text-gray-100 mb-6">
        ¿Estás listo para llevar tu negocio al siguiente nivel? Contáctanos hoy mismo para obtener más información y comenzar a trabajar juntos.
      </p>
      <button class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Contáctanos
      </button>
    </div>
  </div>
  <Tabs/>
</template>

<script>

import Tabs from '../components/tabs.vue'

export default {


  name: 'Home',
  components: {
    // Importar componentes aquí si es necesario
    Tabs
  },
  
};
</script>

<style scoped>
/* Puedes personalizar los estilos aquí si es necesario */
</style>
