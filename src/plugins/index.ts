import type { App } from 'vue'
import { createPinia } from 'pinia'
import '@/styles/index.less'
import 'tailwindcss/tailwind.css'

export const install = (app: App) => {
  app.use(createPinia())
}
