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

const eslintConfig = [
  {
    files: ['**/*.ts', '**/*.tsx'], // Проверяем только TS/TSX файлы
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  prettierConfig,
];

export default eslintConfig;
