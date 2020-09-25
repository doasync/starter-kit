/* eslint-disable @typescript-eslint/no-var-requires */

// Set env vars from file
require('dotenv').config({ path: 'test.env' });

// Override system NODE_ENV
process.env.NODE_ENV = 'test';

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

// noinspection JSValidateJSDoc
/** @type import('@jest/types').Config.InitialOptions */
const config = {
  cacheDirectory: 'node_modules/.cache/jest',
  coverageDirectory: '.coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: `${__dirname}/`,
  }),
};

module.exports = config;
