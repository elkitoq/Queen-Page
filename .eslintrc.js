const prettier = require('./.prettierrc.json')

module.exports = {
  ignorePatterns: ['node_modules', 'dist'],
  root: true,
  env: {
    browser: false,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:prettier/recommended",
    "next/core-web-vitals",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  "plugins": ["react", "prettier", "import", "@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "no-console": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "warn",
      prettier
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_.*?$"
      }
    ],
    "import/order": ["warn", {
      "groups": ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
      "pathGroups": [{
        "pattern": "~/**",
        "group": "external",
        "position": "after"
      }],
      "newlines-between": "always"
    }],
    "react/self-closing-comp": "warn",
    "react/jsx-sort-props": [
      "warn",
      {
        "callbacksLast": true,
        "shorthandFirst": true,
        "noSortAlphabetically": false,
        "reservedFirst": true
      }
    ],
    "padding-line-between-statements": [
      "warn",
      {"blankLine": "always", "prev": "*", "next": "return"},
      {"blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      {"blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}
    ]
  }
}
