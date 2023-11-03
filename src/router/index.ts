import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteLocationNormalized } from 'vue-router';
import pages from './pages';

// 找不到则跳转到404
pages.push({
  path: '/:pathMatch(.*)*',
  redirect: '/404',
});

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: pages,
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
