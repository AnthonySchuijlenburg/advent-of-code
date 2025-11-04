// @ts-check
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            '.next/**',
            'coverage/**',
        ],
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,

    {
        files: ['**/*.{ts}'],
        languageOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2020,
            sourceType: 'module',
            globals: { ...globals.es2020, ...globals.node },
        },
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': 'error',
            curly: ['error', 'all'],
            'linebreak-style': ['error', 'unix'],
        },
    },
]);
