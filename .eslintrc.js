module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    jest: true,
  },
  rules: {
    'max-len': ['error', { code: 120 }],
  },
};
