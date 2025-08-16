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
            entry: {
                index: resolve(__dirname, "src/main.ts"),
                "resolvers/yup": resolve(__dirname, "src/resolvers/yup.ts"),
            },
            name: "ReactPersianForm",
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            external: ["react", "react-dom", "msk-utils", "yup"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "msk-utils": "mskUtils",
                    yup: "Yup",
                },
                exports: "named",
            },
        },
    },
});
