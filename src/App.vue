<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLocaleStore } from '@/store/index';

// 语言
const localeStore = useLocaleStore();
const { antLocale } = storeToRefs(localeStore);

</script>

<template>
  <a-config-provider :locale="antLocale">
    <router-view />
  </a-config-provider>
</template>

<style>
@import './assets/css/reset.css';
</style>
