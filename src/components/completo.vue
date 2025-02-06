<template>
    <div class="contenedor">
        <h1 class="text-blue-200">{{ message }}</h1>
        <button @click="increment"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Incrementar</button>
        <p>{{ doubleCount }}</p>
        <p>{{ messageFromParent }}</p>
    </div>
</template>


<script>
import axios from 'axios'; // Importar una librería

export default {
    props: ['messageFromParent'], // Recibir propiedades del componente padre

    data() {
        return {
            message: 'Hola desde el componente completo!',
            count: 0,
        };
    },

    computed: {
        doubleCount() {
            return this.count * 2;
        },
    },

    methods: {
        increment() {
            this.count++;
        },
        fetchData() {
            axios.get('https://rickandmortyapi.com/api/character')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },

    created() {
        console.log('Componente creado');
    },

    mounted() {
        this.fetchData();
    },

    watch: {
        count(newVal) {
            console.log(`El contador cambió a ${newVal}`);
        },
    },
};

</script>



<style scoped>


.contenedor {
    padding: 20px;
    border: 1px solid black;
    margin: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease-in-out;
}
</style>