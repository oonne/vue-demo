import { createApp } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import pages from '@/constant/pages';
import App from '@/App.vue';

const app = createApp(App);

/* 路由 */
// 懒加载
const getPage = (path: string) => import(`./pages/${path}.vue`);
const routes: RouteRecordRaw[] = pages.map((route) => ({
  path: route.path,
  name: route.pageName,
  component: getPage.bind(this, route.path),
}));

// 404重定向到首页
routes.push({
  path: '/:pathMatch(.*)*',
  redirect: pages[0].path,
});

// 绑定页面
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
app.use(router).mount('#app');
