import { type ConfigType, resolveProgramPath } from '@moneko/core';

const conf: Partial<ConfigType> = {
  devtool: false,
  bar: false,
  output: {
    path: resolveProgramPath('docs'),
  },
  seo: {
    domain: 'monako97.github.io',
    nojekyll: true,
  },
  fixBrowserRouter: {
    pathSegmentsToKeep: 1,
    path: '404.html',
  },
};

export default conf;
