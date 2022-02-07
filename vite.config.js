import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/__/':'http://localhost:4998'
    }
  },
  optimizeDeps: {
    },
  plugins:[

  ],
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/,
      output: {
        dir:"dist/",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css')
            return 'css/main.css';
          return assetInfo.name;
        },
      }
    }
  }
})
