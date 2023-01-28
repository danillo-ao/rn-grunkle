module.exports = {
  preset: 'react-native',
  setupFiles: ['./src/tests/jest-setup.js'],
  moduleDirectories: [
    'node_modules',
    'src/tests', // assets utility folder
    __dirname, // the root directory
  ],
};
