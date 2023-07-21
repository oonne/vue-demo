import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import pages from './pages';

// 懒加载
const getPage = (path: string) => import(`../pages${path}.vue`);

const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: getPage.bind(this, route.path),
}));

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
