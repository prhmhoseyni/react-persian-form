import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],

        files: ["**/*.{ts,tsx}"],

        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        plugins: {
            prettier,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },

        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            quotes: ["error", "double"],
            "no-console": "warn",
            "prettier/prettier": [
                "error",
                {
                    tabWidth: 4,
                    useTabs: false,
                    semi: true,
                    singleQuote: false,
                    trailingComma: "es5",
                    bracketSpacing: true,
                    jsxBracketSameLine: false,
                    arrowParens: "always",
                    printWidth: 128,
                },
            ],
        },
    }
);
