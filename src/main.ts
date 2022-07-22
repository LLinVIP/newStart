import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from '~/store'
import tmui from '~/tmui'
// modules

import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)

  // Configure store
  // https://pinia.vuejs.org/
  setupStore(app)
  app.use(tmui)

  return {
    app,
  }
}
