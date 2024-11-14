// import { menus } from './hooks';
// import { menusSke } from './skeleton';

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  publicPath: '/encode-hooks/',
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  title: '印客学院 encode hooks',
  mode: 'site',
  favicon: '/encode-hooks/avatar.png',
  logo: '/encode-hooks/avatar.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  // alias: {
  //   encodeHooks: process.cwd() + '/packages/hooks/src/index.ts',
  //   ['encode-hooks']: process.cwd() + '/packages/hooks/src/index.ts',
  //   skeleton: process.cwd() + '/packages/skeleton/src/index.ts',
  //   ['skeleton']: process.cwd() + '/packages/skeleton/src/index.ts',
  // },
  resolve: {
    includes: ['docs', 'packages/skeleton','packages/hooks/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'smarty-skeleton-sdk', path: '/guide' },
    { title: 'smarty-skeleton-loading', path: '/guide' },
    { title: 'GitHub', path: 'https://github.com/huabuyu05100510/smarty-skeleton' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    // '/skeleton':menusSke,
    // '/hooks': menus,
  },
};
