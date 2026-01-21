import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Importa o CSS 4o Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Importe os JS do Bootstrap (Opcional, se que queser usar componentes Javascrript como modais,
// dropdowns, etc.)
import 'bootstrap'
// Importe os ícones do Bootstrap (opcional)
import 'bootstrap-icons/font/bootstrap-icons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')