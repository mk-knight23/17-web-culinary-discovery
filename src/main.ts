import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Global error handler
app.config.errorHandler = () => {
  // Errors are handled silently in production
}

app.use(createPinia())
app.mount('#app')
