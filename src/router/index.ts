import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import type { RouteLocationNormalized } from 'vue-router';
import pages from './pages';

// 懒加载
const pagesModules = import.meta.glob('../pages/**/**/*.vue');
const lazyloadPage = (path: string) => pagesModules[`../pages${path}.vue`];

// 路由
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: lazyloadPage(route.component),
  meta: route.meta,
}));

// 找不到则跳转到404
routes.push({
  path: '/:pathMatch(.*)*',
  redirect: '/404',
});

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 路由全局前置守卫
router.beforeEach(async (toRoute: RouteLocationNormalized) => {
  const token = localStorage.getItem('token');
  const { fullPath, meta = {} } = toRoute;
  const { noNeedLogin } = meta;

  // 正常访问
  if (noNeedLogin || token) {
    return true;
  }

  // 重定向到登录页面
  return {
    name: 'login',
    replace: true,
    query: {
      from: fullPath,
    },
  };
});

export default router;
