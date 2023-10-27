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
  // 首页
  {
    pageName: 'home',
    path: '/',
    component: '/system/home/index',
  },

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
    component: '/system/login/LoginFrom',
    meta: {
      noNeedLogin: true,
    },
  },
  // 注册
  {
    pageName: 'registration',
    path: '/registration',
    component: '/system/login/LoginFrom',
    meta: {
      noNeedLogin: true,
    },
  },
  // 忘记密码
  {
    pageName: 'forgetpassword',
    path: '/forgetpassword',
    component: '/system/login/LoginFrom',
    meta: {
      noNeedLogin: true,
    },
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
