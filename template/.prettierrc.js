module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',

  importOrder: [
    '^react*',
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@configs/(.*)$',
    '^@navigation/(.*)$',
    '^@screens/(.*)$',
    '^@services/(.*)$',
    '^@theme/(.*)$',
    '^@utils/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
