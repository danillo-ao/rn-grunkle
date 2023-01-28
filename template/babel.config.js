module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      { envName: 'APP_ENV', moduleName: '@env', path: '.env', safe: true },
    ],
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@tests': './src/tests/index.tsx',
        },
      },
    ],
  ],
};
