import { defineConfig } from "vite";

export default defineConfig({
    server: {
        watch: {
            usePolling: true,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                logger: { warn: () => { } } // полностью отключает предупреждения Sass
            }
        }
    }
});

