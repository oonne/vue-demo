import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
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
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 8100,
  },
  build: {
    assetsInlineLimit: 0,
  },
});
