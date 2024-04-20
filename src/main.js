import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import store from "../src/store/index"
import App from "./App.vue"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { pt_BR } from "./locales/pt_BR"
import { en } from "./locales/en"
import { es } from "./locales/es"

const languages = {
  pt_BR,
  en,
  es,
}

const i18n = createI18n({
  locale: "pt_BR",
  fallbackLocale: "en",
  messages: languages,
})

createApp(App).use(store).use(i18n).mount("#app")
