import Layout from '@/layout/index.vue';
import type { RouteRecordRaw } from 'vue-router';

const pages: RouteRecordRaw[] = [
  /*
   * 系统页面
   */
  // 异常
  {
    path: '/403',
    name: '403',
    component: import('@/pages/system/exception/index.vue'),
    meta: {
      noNeedLogin: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: import('@/pages/system/exception/index.vue'),
    meta: {
      noNeedLogin: true,
    },
  },
  {
    path: '/500',
    name: '500',
    component: import('@/pages/system/exception/index.vue'),
    meta: {
      noNeedLogin: true,
    },
  },

  // 登录
  {
    path: '/login',
    name: 'login',
    component: import('@/pages/system/login/login-form.vue'),
    meta: {
      noNeedLogin: true,
    },
  },
  // 注册
  {
    path: '/registration',
    name: 'reg',
    component: import('@/pages/system/login/reg-form.vue'),
    meta: {
      noNeedLogin: true,
    },
  },
  // 忘记密码
  {
    path: '/reset-password',
    name: 'resetPassword',
    component: import('@/pages/system/login/reset-form.vue'),
    meta: {
      noNeedLogin: true,
    },
  },

  /*
   * 个人中心
   */
  {
    path: '/profile',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/pages/profile/home/index.vue'),
        name: 'home',
      },
    ],
  },
];

export default pages;
