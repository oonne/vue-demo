import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint-disable-next-line
import Components from 'unplugin-vue-components/vite';
// eslint-disable-next-line
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  server: {
    port: 8000,
  },
});
