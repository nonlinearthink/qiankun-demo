import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      jsSandbox: true,
      prefetch: true,
    },
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/welcome',
          component: '@/pages/Welcome',
        },
      ],
    },
  ],
  fastRefresh: {},
});
