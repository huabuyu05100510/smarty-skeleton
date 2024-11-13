import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'Counter',
      fileName: 'counter',
    },
    rollupOptions: {
      output: [
        {
          format: 'esm',
          dir: 'dist',
          exports: 'named',
          entryFileNames: '[name].mjs',
          chunkFileNames: '[name].mjs',
        },
        {
          format: 'cjs',
          dir: 'dist',
          exports: 'named',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name].cjs',
        },
      ],
    },
  },
})
