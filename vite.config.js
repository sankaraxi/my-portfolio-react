import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite" // Tailwind CSS plugin for Vite
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Setting up alias for easier imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
 