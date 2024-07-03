import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    const PORT = `${env.VITE_CLIENT_PORT}`;

    return {
        plugins: [react()],
        server: {
            port: PORT,
        },
        test: {
            environment: 'jsdom',
            globals: true,
            setupFiles: './src/__tests__/setup.js',
        },
    };
});
