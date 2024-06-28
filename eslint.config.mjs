import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { fixupPluginRules } from '@eslint/compat';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    languageOptions: { globals: globals.browser },
    ignores: ['dist/*'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'sort-keys-fix': fixupPluginRules(sortKeysFix),
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React + other packages
            ['^react', '^@?\\w'],
            // Radix imports.
            ['^(@radix-ui)'],
            // @Aliases and Relative imports. Put same-folder imports and `.` last.
            [
              '^(@components|@constants|@contexts|@modules|@pages|@styles|@types|@utils)',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
            ],
            // Side effects + style imports.
            ['^\\u0000', '^.+\\.?(css)$'],
          ],
        },
      ],
      'sort-keys-fix/sort-keys-fix': 'error',
    },
    files: ['**/*.ts', '**/*.tsx'],
  },
];
