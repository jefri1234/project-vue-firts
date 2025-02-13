import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el router
import './style.css'
const app = createApp(App);

// Usa el router en la aplicación
app.use(router);

app.mount('#app');
