import { createApp } from 'vue' // componente de mismo vue
import './style.css' //hojas de estilos
import App from './App.vue'//componente App

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({

    components,
    directives,
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                }
            }
        }
    }
})  // Configuración básica

createApp(App).mount('#app').use(vuetify)
// Monta la aplicación en el div con id app que esta en el html
