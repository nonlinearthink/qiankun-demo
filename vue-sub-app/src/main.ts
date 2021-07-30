import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const isQiankun = window.__POWERED_BY_QIANKUN__;

let instance: ReturnType<typeof createApp> | null;

function render(props: any) {
  const { container } = props as any;
  instance = createApp(App);
  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function bootstrap(): Promise<void> {
  console.log("vue sub app bootstraped");
}

export async function mount(props: Record<string, any>): Promise<void> {
  console.log("vue sub app mount", props);
  render(props);
}

export async function unmount(): Promise<void> {
  instance = null;
}

isQiankun || render("");
