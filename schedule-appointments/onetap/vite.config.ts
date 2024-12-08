import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      // Proxy for the service on port 8081
      '/fhir8081': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fhir8081/, '/fhir'), 
      },
      // Proxy for the service on port 8082
      '/fhir8082': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fhir8082/, '/fhir'), 
      },
      // Proxy for the service on port 8083
      '/fhir8083': {
        target: 'http://localhost:8083',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fhir8083/, '/fhir'), 
      }, 
      '/fhir8084': {
        target: 'http://localhost:8084',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fhir8084/, '/fhir'), 
      }
    }
  }
})
