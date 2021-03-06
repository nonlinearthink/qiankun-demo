import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./router";
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  createMemoryHistory,
} from "vue-router";

type createHistoryType =
  | typeof createWebHistory
  | typeof createWebHashHistory
  | typeof createMemoryHistory;

let instance: ReturnType<typeof createApp> | null;

// 自定义渲染函数
function render(props: any) {
  const { container } = props as any;
  console.log("props from master", props);
  let createHistory: createHistoryType;
  const historyType = props.history.type || props.history;
  console.log("history type", historyType);
  switch (historyType) {
    case "hash":
      createHistory = createWebHashHistory;
      break;
    case "memory":
      createHistory = createMemoryHistory;
      break;
    default:
      createHistory = createWebHistory;
  }
  const router = createRouter({
    history: createHistory(window.__POWERED_BY_QIANKUN__ ? "/vue" : ""),
    routes,
  });
  // 创建实例
  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
  // 设置
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

// bootstrap 生命周期函数
export async function bootstrap(): Promise<void> {
  console.log("vue sub app bootstraped");
}

//mount 生命周期函数，用于接收 props 并渲染
export async function mount(props: Record<string, any>): Promise<void> {
  render(props);
}

//unmount 生命周期函数
export async function unmount(): Promise<void> {
  instance = null;
}

// 如果不是qiankun项目则传入一个空值进行默认的渲染
window.__POWERED_BY_QIANKUN__ || render("");
