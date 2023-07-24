import { createApp } from 'vue';
import router from '@/router';
import App from '@/App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

/* 初始化 */
const bootstrap = async () => {
  const app = createApp(App);

  // Antd
  app.use(Antd);

  // 路由
  app.use(router);
  await router.isReady();
  // 挂载应用

  app.mount('#app');
};

bootstrap();
