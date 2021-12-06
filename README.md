# Qiankun 微前端实战

本仓库为个人学习微前端搭建的案例。

分别进入文件夹下启动，然后打开 `main-app` 界面预览，启动无先后顺序，端口已被固定。

目前支持的功能：

- 通过API动态获取子应用的配置和路由信息
- 父子应用的通信

  在`react-sub-app`或者`react-sub-app2`中点击`+`，另一方的数字会同步变化
- 多种路由，包括`memory`路由
  
  使用`umi`的项目可以自动适配`memory`路由，非`umi`的项目需要判断路由，见`vue-sub-app`项目。这个功能主要是为了在一个页面中同时存在多个子应用，`hash`和`history`路由会和子应用绑定，多个子应用同时存在会导致路由覆盖和混乱。

待支持的功能：

- `memory`路由下子应用之间的跳转
  
  `memory`路由下子应用内部的跳转是没问题的，但是因为`memory`路由不会影响浏览器的路由，导致子应用之间的跳转不能实现。

## 主应用 main-app

使用的技术栈：`react`、`typescript`、`umijs`、`qiankun`

### 运行

```
yarn start
```

## 微应用 react-sub-app

使用的技术栈：`react`、`typescript`、`umijs`、`qiankun`

### 运行

```
yarn start
```

## 微应用 vue-sub-app

使用的技术栈：`vue3.0`、`typescript`

### 运行

```
npm run serve
```
