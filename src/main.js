import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import store from './store'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/main1.css'

const app = createApp(App)

app.use(store)
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
app.use(pinia)
app.use(router)

app.mount('#app')
