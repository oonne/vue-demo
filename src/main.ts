import { createApp } from 'vue';
import { router, setupRouter } from '@/router';
import App from '@/App.vue';

/* 初始化 */
const bootstrap = async () => {
  const app = createApp(App);

  // 路由
  setupRouter(app);
  await router.isReady();

  // 挂载应用
  app.mount('#app');
};

bootstrap();
