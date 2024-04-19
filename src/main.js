import { createApp } from "vue"
import store from '../src/store/index'
import App from "./App.vue"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).mount("#app")
