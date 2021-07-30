import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'react-sub-app',
          entry: '//localhost:8001',
        },
        {
          name: 'vue-sub-app',
          entry: '//localhost:8002',
        },
      ],
      jsSandbox: true,
      prefetch: true,
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/react', microApp: 'react-sub-app', exact: true },
        { path: '/vue', microApp: 'vue-sub-app', exact: true },
      ],
    },
  ],
  fastRefresh: {},
});
