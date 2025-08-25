import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), dts({ include: ["src"] })],
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
            external: ["react", "react-dom", "msk-utils", "yup", "react-hook-form", "clsx", "lucide-react"],
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
