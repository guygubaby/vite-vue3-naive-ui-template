import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { createPinia } from 'pinia'
import { persistPlugin } from 'pinia-misc'
import App from './App.vue'

import '@unocss/reset/tailwind-compat.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(persistPlugin)

app.use(pinia)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: routes => setupLayouts(routes),
})

// 是否已经登录
const hasLoggedIn = useLocalStorage<boolean>('hasLoggedIn', false)

const publicRoutes = ['/login', '/register']

router.beforeEach((to, from, next) => {
  const isPublic = publicRoutes.includes(to.path)
  if (hasLoggedIn.value || isPublic)
    return next()

  return next('/login')
})

app.use(router)

app.mount('#app')
