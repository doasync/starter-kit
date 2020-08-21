/** @type Partial<import('stylelint').Configuration> */
const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-xo-scss',
    'stylelint-config-xo-space',
    'stylelint-config-sass-guidelines',
    'stylelint-config-rational-order',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  rules: {
    // Selectors should be lowercase with hyphens, may have __postfixes
    'selector-class-pattern': '^[a-z0-9\\-]+(__[a-z0-9\\-]+)*$',
    // Use stylelint-config-rational-order instead
    'order/properties-alphabetical-order': null,
    'selector-max-id': 3,
    'max-nesting-depth': [
      3,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
        ignore: ['pseudo-classes'],
      },
    ],
  },
};

module.exports = config;
