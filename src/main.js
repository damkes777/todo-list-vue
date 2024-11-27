import './assets/style.css'
import './icons.js'

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {createApp} from 'vue'
import App from './App.vue'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

