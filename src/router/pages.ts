interface Page {
  pageName: string;
  path: string;
  component: string;
  meta?: {
    noNeedLogin?: boolean;
  };
}

/*
 * 路由页面
 */
const pages: Page[] = [
  /*
   * 系统页面
   */
  // 异常
  {
    pageName: '403',
    path: '/403',
    component: '/system/exception/index',
    meta: {
      noNeedLogin: true,
    },
  },
  {
    pageName: '404',
    path: '/404',
    component: '/system/exception/index',
    meta: {
      noNeedLogin: true,
    },
  },
  {
    pageName: '500',
    path: '/500',
    component: '/system/exception/index',
    meta: {
      noNeedLogin: true,
    },
  },

  // 登录
  {
    pageName: 'login',
    path: '/login',
    component: '/system/login/login-form',
    meta: {
      noNeedLogin: true,
    },
  },
  // 注册
  {
    pageName: 'reg',
    path: '/registration',
    component: '/system/login/reg-form',
    meta: {
      noNeedLogin: true,
    },
  },
  // 忘记密码
  {
    pageName: 'resetPassword',
    path: '/reset-password',
    component: '/system/login/reset-form',
    meta: {
      noNeedLogin: true,
    },
  },

  /*
   * 个人中心
   */
  // 首页
  {
    pageName: 'home',
    path: '/home',
    component: '/user/home/index',
  },
  // 账号信息
  {
    pageName: 'userInfo',
    path: '/user-info',
    component: '/user/info/index',
  },

  /*
   * 功能页面
   */
  {
    pageName: 'demo-1',
    path: '/demo-1',
    component: '/demo/demo-1/index',
  },
  {
    pageName: 'demo-2',
    path: '/demo-2',
    component: '/demo/demo-2/index',
  },
];

export default pages;
