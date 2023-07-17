interface Page {
  path: string;
  pageName: string;
}

/* 路由页面 */
const pages: Page[] = [
  {
    path: '/ModuleA/PageA1',
    pageName: 'A1',
  },
  {
    path: '/ModuleA/PageA2',
    pageName: 'A2',
  },
  {
    path: '/ModuleB/PageB1',
    pageName: 'B1',
  },
  {
    path: '/ModuleB/PageB2',
    pageName: 'B2',
  },
];

export default pages;
