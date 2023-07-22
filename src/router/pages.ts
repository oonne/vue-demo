interface Page {
  pageName: string;
  path: string;
  component: string;
}

/* 路由页面 */
const pages: Page[] = [
  {
    pageName: 'A1',
    path: '/ModuleA/PageA1',
    component: '/ModuleA/PageA1',
  },
  {
    pageName: 'A2',
    path: '/ModuleA/PageA2',
    component: '/ModuleA/PageA2',
  },
  {
    pageName: 'B1',
    path: '/ModuleB/PageB1',
    component: '/ModuleA/PageA2',
  },
  {
    pageName: 'B2',
    path: '/ModuleB/PageB2',
    component: '/ModuleA/PageA2',
  },
];

export default pages;
