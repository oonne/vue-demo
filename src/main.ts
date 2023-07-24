import { createApp } from 'vue';
import router from '@/router';
import App from '@/App.vue';

/* 初始化 */
const bootstrap = async () => {
  const app = createApp(App);

  // 路由
  app.use(router);
  await router.isReady();

  // 挂载应用
  app.mount('#app');
};

bootstrap();
