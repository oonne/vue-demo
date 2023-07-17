<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

/* 切换页面 */
const handleClickMenu = (options) => {
  const { key } = options;
  router.push({ name: key });
};

</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider theme="light" collapsible>
      <a-menu
        mode="inline"
        @click="handleClickMenu"
      >
        <a-sub-menu key="ModuleA">
          <template #title>
            Module A
          </template>
          <a-menu-item key="A1">
            Page A1
          </a-menu-item>
          <a-menu-item key="A2">
            Page A2
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="ModuleB">
          <template #title>
            Module B
          </template>
          <a-menu-item key="B1">
            Page B1
          </a-menu-item>
          <a-menu-item key="B2">
            Page B2
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        一个底导航，不需要可以删掉
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style>
@import './assets/css/reset.css';
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
