import { type ConfigType } from '@moneko/core';

const conf: Partial<ConfigType> = {
  importOnDemand: {
    lodash: {
      transform: '${member}',
    },
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:8007/',
      changeOrigin: true,
      pathRewrite: { '^/api/': '/' },
      secure: false,
    },
  },
};

export default conf;
