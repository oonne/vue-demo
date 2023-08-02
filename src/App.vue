<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLocaleStore, useUserStore } from '@/store/index';
import config from '@/config/index';

const { colorPrimary } = config;

// 语言
const localeStore = useLocaleStore();
const { antLocale } = storeToRefs(localeStore);
localeStore.initLocaleSetting();

// 企业、用户
const userStore = useUserStore();
userStore.init();

</script>

<template>
  <a-config-provider
    :locale="antLocale"
    :theme="{
      token: {
        colorPrimary,
      },
    }"
  >
    <router-view />
  </a-config-provider>
</template>

<style>
@import './assets/css/reset.css';
</style>
