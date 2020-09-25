// Module declarations for Webpack
declare module 'postcss-*' {
  import { PluginCreator } from 'postcss';

  const plugin: PluginCreator<unknown>;

  // noinspection all
  export default plugin;
}
