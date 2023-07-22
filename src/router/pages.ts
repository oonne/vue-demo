interface Page {
  pageName: string;
  path: string;
  component: string;
}

/* 路由页面 */
const pages: Page[] = [
  {
    pageName: 'Login',
    path: '/login',
    component: '/login/IndexPage',
  },
];

export default pages;
