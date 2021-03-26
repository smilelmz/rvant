module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/alt-text': 0,
    'no-unused-vars': ['off'],
    'no-undef': ['off'],
    'no-console': ['off'],
    'global-require': ['off'],
    'no-script-url': ['off'],
    'no-plusplus': ['off'],
    'consistent-return': ['off'],
    'no-unused-expressions': ['off'],
    'no-nested-ternary': ['off'],
    'no-param-reassign': ['off'],
    '@typescript-eslint/no-unused-expressions': ['off'],
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/consistent-type-imports': 'off'
  },
  globals: {},
  parserOptions: {
    project: './tsconfig.eslint.json'
  }
}
