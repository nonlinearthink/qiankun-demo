import { useState } from 'react';

// 接口返回值的类型定义
type MicroAppConfig = {
  name: string;
  entry: string;
  route: string;
};

// qiankun 运行时配置，从 /api/microApps 获取子应用的配置文件
export const qiankun = fetch('/api/microApps')
  .then((res) => res.json())
  .then(({ config }: { config: MicroAppConfig[] }) => {
    let apps: any[] = [],
      routes: any[] = [];
    // 从服务器返回的配置信息解析子应用信息和路由信息
    config.forEach((item) => {
      apps.push({
        name: item.name,
        entry: item.entry,
        activeRoute: item.route,
      });
      routes.push({
        path: item.route,
        microApp: item.name,
      });
    });
    return {
      // 注册子应用信息
      apps,
      // 路由
      routes,
      // 完整生命周期钩子请看 https://qiankun.umijs.org/zh/api/#registermicroapps-apps-lifecycles
      lifeCycles: {
        afterMount: (props: any) => {
          console.log(`${props.name} 挂载成功`);
        },
      },
      // 支持更多的其他配置，详细看这里 https://qiankun.umijs.org/zh/api/#start-opts
    };
  });

// 返回给子应用的数据
export function useQiankunStateForSlave() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}
