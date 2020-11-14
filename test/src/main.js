import { createApp } from 'vue'
import App from './App.vue'
import { addVconsole, addEruda } from "../../lib/index";
addVconsole(false)
addEruda()

createApp(App).mount('#app')
