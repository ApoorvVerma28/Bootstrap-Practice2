// Import base ESLint JavaScript configuration
import js from '@eslint/js'
// Import global variables definitions for different environments
import globals from 'globals'
// Import React Hooks ESLint plugin for Hook rules
import reactHooks from 'eslint-plugin-react-hooks'
// Import React Refresh plugin for Fast Refresh compatibility
import reactRefresh from 'eslint-plugin-react-refresh'
// Import ESLint configuration utilities
import { defineConfig, globalIgnores } from 'eslint/config'

// Export ESLint configuration array
export default defineConfig([
  // Ignore dist directory from linting
  globalIgnores(['dist']),
  {
    // Target all JavaScript and JSX files
    files: ['**/*.{js,jsx}'],
    // Extend recommended configurations
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    // Language configuration options
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    // Custom ESLint rules
    rules: {
      // Allow unused variables that start with uppercase or underscore
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])