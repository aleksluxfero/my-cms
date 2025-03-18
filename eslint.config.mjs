import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Базовая конфигурация для всех TS/TSX файлов
export default [
  // Первый объект: Next.js и TypeScript правила
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...compat.extends('next/core-web-vitals', 'next/typescript')[0],
    settings: {
      react: {
        version: 'detect', // Автоматически определяет версию React
      },
    },
  },
  // Второй объект: Prettier интеграция
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // Третий объект: Отключаем конфликтующие правила
  prettierConfig,
];
