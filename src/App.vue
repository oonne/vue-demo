<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLocaleStore } from '@/store/index';
import { colorPrimary } from '@/config/index';

// 语言
const localeStore = useLocaleStore();
const { antLocale } = storeToRefs(localeStore);
localeStore.initLocaleSetting();
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
