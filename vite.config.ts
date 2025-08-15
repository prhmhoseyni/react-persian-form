import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), dts({ include: ["src"] })],
    resolve: {
        alias: {
            "~": resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: "ReactPersianForm",
            fileName: (format) => `react-persian-form.${format}.js`,
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: ["react", "react-dom", "msk-utils"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "msk-utils": "mskUtils",
                },
            },
        },
    },
});
