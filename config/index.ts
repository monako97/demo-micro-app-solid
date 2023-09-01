import type { ConfigType } from '@moneko/core';

const conf: Partial<ConfigType<'swc'>> = {
  basename: '/demo-micro-app-solid',
  publicPath: '/demo-micro-app-solid/',
  importOnDemand: {
    lodash: {
      transform: '${member}',
    },
  },
  proxy: [
    {
      context: ['/api/'],
      target: 'http://localhost:8007/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
      secure: false,
    },
  ],
};

export default conf;
