<template>
  <a-layout
    style="min-height: 100vh"
  >
    <!-- 侧导航 -->
    <a-layout-sider
      v-model:collapsed="collapsed"
      theme="light"
      :trigger="null"
      collapsible
    >
      <SideView />
    </a-layout-sider>

    <a-layout>
      <!-- 顶栏 -->
      <a-layout-header
        theme="light"
      >
        <HeaderView />
      </a-layout-header>

      <!-- 内容 -->
      <a-layout-content>
        <AppView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import AppView from './app-view.vue';
import HeaderView from './header-view.vue';
import SideView from './side-view.vue';

const collapsed = ref<boolean>(false);
</script>

<style scoped>
</style>
