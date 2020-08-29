/* eslint-disable @typescript-eslint/no-var-requires */

const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

// noinspection JSValidateJSDoc
/** @type import('@jest/types').Config.InitialOptions */
const config = {
  coverageDirectory: '.coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: `${__dirname}/`,
  }),
};

module.exports = config;
