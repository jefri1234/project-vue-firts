<template>
    <div class="container mx-auto p-6 w-full h-screen">
    <h1 class="text-3xl font-semibold text-center text-blue-600 mb-6">Nuestros Servicios</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="service-card p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
        <h2 class="text-xl font-bold text-blue-600 mb-2">Desarrollo Web</h2>
        <p class="text-gray-700 mb-4">
          Creamos sitios web responsivos y modernos que ofrecen una experiencia de usuario óptima en cualquier dispositivo.
        </p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Más información</button>
      </div>

      <div class="service-card p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
        <h2 class="text-xl font-bold text-blue-600 mb-2">Consultoría de SEO</h2>
        <p class="text-gray-700 mb-4">
          Ayudamos a mejorar la visibilidad de tu sitio web en los motores de búsqueda con estrategias personalizadas de SEO.
        </p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Más información</button>
      </div>

      <div class="service-card p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow">
        <h2 class="text-xl font-bold text-blue-600 mb-2">Marketing Digital</h2>
        <p class="text-gray-700 mb-4">
          Ofrecemos campañas de marketing digital efectivas que aumentan el alcance y la conversión de tu negocio.
        </p>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Más información</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
};
</script>

<style scoped>
/* Puedes personalizar los estilos aquí si es necesario */
</style>
