import { createApp } from 'vue'
import App from './App.vue'
import { addVconsole, addEruda } from "../../lib/index";
addVconsole(false, 1)
addEruda()

createApp(App).mount('#app')
