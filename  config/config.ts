/* eslint-disable global-require */
import { defineConfig } from 'umi';

export default defineConfig({
  title: false,
  outputPath: './dist',
  base: '/',
  favicon: 'favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  sass: {
    implementation: require('node-sass'),
  },
  extraBabelPlugins: [
    'transform-remove-console'
  ],
  // dva: {
  //   immer: true,
  //   hmr: true,
  // }
});
