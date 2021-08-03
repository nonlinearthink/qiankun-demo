export default {
  // 模拟获取子应用的配置
  '/api/microApps': {
    config: [
      {
        name: 'react-sub-app',
        entry: '//localhost:8001',
        route: '/react',
      },
      {
        name: 'vue-sub-app',
        entry: '//localhost:8002',
        route: '/vue',
      },
    ],
  },
};
