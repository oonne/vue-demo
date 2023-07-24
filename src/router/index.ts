import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import pages from './pages';

// 懒加载
const pagesModules = import.meta.glob('../pages/**/**/*.vue');
const lazyloadPage = (path: string) => pagesModules[`../pages${path}.vue`];

// 路由
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: lazyloadPage(route.component),
}));

// 找不到则跳转到404
routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/404',
});

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
