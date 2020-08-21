// Module declarations for Webpack
declare module 'postcss-*' {
  import { Plugin } from 'postcss';

  const plugin: Plugin<unknown>;

  // noinspection all
  export default plugin;
}
