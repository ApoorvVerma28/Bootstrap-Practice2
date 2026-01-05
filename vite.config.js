// Import Vite's configuration function
import { defineConfig } from 'vite'
// Import React plugin for JSX and Fast Refresh support
import react from '@vitejs/plugin-react'

// Official Vite configuration documentation: https://vite.dev/config/
// Export Vite configuration object
export default defineConfig({
  // Register React plugin for optimal development experience
  plugins: [react()],
})