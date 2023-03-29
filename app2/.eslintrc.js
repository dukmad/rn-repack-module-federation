module.exports = {
  root: true,
  extends: '@react-native-community',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  overrides: [
    {
      files: ['*.config.{js,mjs,cjs}'],
      rules: {
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
