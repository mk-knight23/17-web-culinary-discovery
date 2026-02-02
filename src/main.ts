import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, _instance, info) => {
  // Log error in development, could send to error tracking service in production
  const error = err as Error
  if (import.meta.env.DEV) {
    console.error('Vue error:', error)
    console.error('Error info:', info)
  }
}

app.use(createPinia())
app.mount('#app')
