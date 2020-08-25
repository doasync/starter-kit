const isTest = process.env.NODE_ENV === 'test';
const isDevelopment =
  process.env.WEBPACK_DEV_SERVER === 'true' ||
  process.env.NODE_ENV === 'development';
process.env.NODE_ENV = isDevelopment ? 'development' : 'production';

const presetReact = {
  development: isDevelopment,
  useBuiltIns: true,
};

/** @type import('@babel/preset-env').Options */
const presetEnv = {
  loose: true,
  useBuiltIns: 'usage',
  corejs: 3,
  modules: isTest ? 'commonjs' : false,
  shippedProposals: true,
  bugfixes: true, // remove later in babel 8
};

const presetTypescript = {
  isTSX: true,
  allExtensions: true,
};

const pluginStyledComponents = {
  displayName: isDevelopment,
  pure: true,
};

const pluginEffector = {
  addLoc: true,
};

module.exports = {
  presets: [
    ['@babel/preset-react', presetReact],
    ['@babel/preset-env', presetEnv],
    ['@babel/preset-typescript', presetTypescript],
  ],
  plugins: [
    ['babel-plugin-styled-components', pluginStyledComponents],
    ['react-hot-loader/babel'],
    ['effector/babel-plugin', (isDevelopment || isTest) && pluginEffector],
  ],
};
