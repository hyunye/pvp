import { defineConfig } from 'vite'

export default defineConfig({
    root: './',
    build: {
        rollupOptions: {
            input: {
                main: 'page/index.html'
            },
            output: {
                chunkFileNames: 'src/[name]_[hash].js',
                entryFileNames: 'src/[name]_[hash].js',
                assetFileNames: 'src/[name]_[hash].[ext]'
            }
        },
        outDir: 'dist',
        assetsDir: ''
    }
})