import fs from 'fs';
// eslint-disable-next-line unicorn/import-style
import { normalize } from 'path';

// normalize paths for Windows
export const root = normalize(fs.realpathSync(`${__dirname}/..`));

export const source = normalize(`${root}/src`);
export const build = normalize(`${root}/build`);

export const entryMain = normalize(`${source}/index.ts`);
export const indexHtml = normalize(`${source}/index.html`);
export const favicon = normalize(`${source}/favicon.png`);

export const extensions = ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'];
export const jsPattern = /\.(mjs|js|jsx|ts|tsx)$/;
export const filePattern = /\.(jpg|png|gif|woff2)$/;
export const svgPattern = /\.(svg)$/;
export const cssPattern = /\.(css)$/;
export const scssPattern = /\.(scss)$/;

export const outputDev = {
  assets: normalize('[path][name].[ext]'),
  js: normalize('js/[name].js'),
  jsChunks: normalize('js/[name].js'),
  css: normalize('css/[name].css'),
  cssChunks: normalize('css/[name].css'),
};

export const outputProd = {
  assets: normalize('assets/[name].[contenthash:6].[ext]'),
  js: normalize('js/[name].[contenthash:6].js'),
  jsChunks: normalize('js/[name].[contenthash:6].js'),
  css: normalize('css/[name].[contenthash:6].css'),
  cssChunks: normalize('css/[name].[contenthash:6].css'),
};

export const env = normalize(`${root}/.env`);
export const envRef = normalize(`${root}/.env.ref`);
