import { defineConfig } from 'vite';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
    plugins: [nodeResolve()],
    build: {
        minify: false,
        rollupOptions: {
            input: 'index.jsx', // Путь к вашему файлу .jsx
            output: {
                dir: 'dist',
                entryFileNames: 'index.js',
                format: 'iife',
            },
        },
        esbuild: {
            jsxFactory: 'jsxDom', // Фабрика JSX для работы с jsx-dom
            jsxFragment: 'Fragment',
        },
    },
});
