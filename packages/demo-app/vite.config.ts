import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), {
    // we can inject different implementation, 
    // as long as @plugin1 interface has been implemented
    name: 'inject @plugin1',
    resolveId(id) {
      if (id === '@plugin1') {
        return '@ralc/demo-plugin1';
      }
    }
  }, {
    // we can inject different implementation, 
    // as long as @plugin2 interface has been implemented
    name: 'inject @plugin2',
    resolveId(id) {
      if (id === '@plugin2') {
        return '@ralc/demo-plugin2';
      }
    }
  }],
  base: '',
})
