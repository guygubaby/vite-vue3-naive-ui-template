import { createApp } from 'vue'

import App from './App.vue'
import { setupPinia, setupRouter } from './modules'

import '@unocss/reset/tailwind-compat.css'
import './styles/main.css'
import 'uno.css'

const bootstrap = async () => {
  const app = createApp(App)

  setupRouter(app)
  setupPinia(app)

  app.mount('#app')
}

bootstrap().catch(console.error)
