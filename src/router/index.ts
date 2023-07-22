import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import pages from './pages';

// 懒加载
const lazyloadPage = (path: string) => import(`/src/pages${path}.vue`);

// 路由
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: lazyloadPage(route.component),
}));

// 404重定向到首页
routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/404',
});

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export const setupRouter = (app: App<Element>) => {
  app.use(router);
};
