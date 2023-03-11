import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { installVue3SphinxXml } from 'vue3-sphinx-xml'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(installVue3SphinxXml, { store: null })

app.mount('#app')
