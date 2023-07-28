<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useLocaleStore } from '@/store/index';
import type { LocaleType } from '@/types/index';

const router = useRouter();

const to2 = () => {
  router.push({ name: 'demo-2' });
};

const localeStore = useLocaleStore();
const { locale } = storeToRefs(localeStore);
const { setLocale } = localeStore;

const lang = ref('zh_CN');

const handleChangeLang = (value: LocaleType) => {
  setLocale(value);
};
</script>

<template>
  <div @click="to2">
    demo-1
  </div>
  <div>
    {{ locale }}
  </div>

  <a-date-picker />

  <a-select
    ref="select"
    v-model:value="lang"
    style="width: 120px"
    @change="handleChangeLang"
  >
    <a-select-option value="zh_CN">
      简体中文
    </a-select-option>
    <a-select-option value="zh_TW">
      繁体中文
    </a-select-option>
    <a-select-option value="en_US">
      英文
    </a-select-option>
  </a-select>
</template>

<style scoped>
</style>
