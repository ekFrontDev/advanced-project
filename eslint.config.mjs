import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
// import i18next from 'i18next';

export default defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: {
            react,
            tseslint,
        },
        languageOptions: { 
            globals: {
                ...globals.browser,
                ...globals.jest
            }
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        rules: {
            indent: [2, 4, { 'ignoredNodes': ['ConditionalExpression'] }],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-console': 'warn',
            'max-len': ['error', {'ignoreComments': true, code: 100}],

            "i18next/no-literal-string": [
                "error",
                 {
                    markupOnly: true,
                    ingoreAttribute: ['data-testid']
                }
            ]
        },
    },
    {
        ignores: ['node_modules/**', 'build/**'],
    },
    {
        ovverrides: [
            {
                files: ['**/src/**/*.test.{ts,tsx}'],
                rules: {
                    "i18next/no-literal-string": 'off'
                }
            }
        ]
    }
]);
