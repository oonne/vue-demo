interface Page {
  pageName: string;
  path: string;
  component: string;
}

/*
 * 路由页面
 */
const pages: Page[] = [
  /*
   * 系统页面
   */
  // 登录
  {
    pageName: 'login',
    path: '/login',
    component: '/system/login/index',
  },

  // 异常
  {
    pageName: '403',
    path: '/403',
    component: '/system/exception/index',
  },
  {
    pageName: '404',
    path: '/404',
    component: '/system/exception/index',
  },
  {
    pageName: '500',
    path: '/500',
    component: '/system/exception/index',
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
