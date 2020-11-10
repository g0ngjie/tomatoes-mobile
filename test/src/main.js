import { createApp } from 'vue'
import App from './App.vue'
import { addVconsole } from "../../lib/index";
addVconsole(false)

createApp(App).mount('#app')
