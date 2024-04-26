import { type ConfigType, PACKAGENAME, resolveProgram } from '@moneko/core';

const conf: Partial<ConfigType> = {
  devtool: false,
  bar: false,
  basename: `/${PACKAGENAME}`,
  publicPath: `/${PACKAGENAME}/`,
  output: resolveProgram('docs'),
  seo: {
    domain: 'monako97.github.io',
    jekyll: false,
  },
  fixBrowserRouter: {
    pathSegmentsToKeep: 1,
    path: '404.html',
  },
};

export default conf;
