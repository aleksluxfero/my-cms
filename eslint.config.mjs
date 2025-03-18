import { dirname } from 'path';
import { fileURLToPath } from 'url';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks'; // Плагин для React Hooks
import tsEslint from '@typescript-eslint/eslint-plugin'; // Плагин для TypeScript
import tsParser from '@typescript-eslint/parser'; // Парсер для TypeScript
import nextPlugin from '@next/eslint-plugin-next'; // Плагин для Next.js

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  // Глобальные исключения
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', '.vercel/**'],
  },
  // Основная конфигурация для TS/TSX
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      'react-hooks': reactHooks,
      '@typescript-eslint': tsEslint,
      '@next/next': nextPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off', // Не нужен в Next.js
      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-use-before-define': 'error',
      // Next.js
      '@next/next/no-img-element': 'warn',
      // Prettier
      'prettier/prettier': 'error',
    },
  },
  // Отключаем конфликтующие правила
  prettierConfig,
];
