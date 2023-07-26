<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
// import zhTW from 'ant-design-vue/es/locale/zh_TW';
// import enUS from 'ant-design-vue/es/locale/en_US';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
// import 'dayjs/locale/zh-tw';
// import 'dayjs/locale/en';

dayjs.locale('zh-cn');
const locale = zhCN;

</script>

<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<style>
@import './assets/css/reset.css';
</style>
