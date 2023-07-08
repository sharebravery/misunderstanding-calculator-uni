/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-06-28 09:44:47
 */
import { createSSRApp } from 'vue'
import stores from './stores'
import 'uno.css'
import App from './App.vue'
import uniCrazyRouter from './router'
import { setupDirective } from './directives'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uniCrazyRouter)
  app.use(stores)
  setupDirective(app)
  return {
    app,
    stores,
  }
}
