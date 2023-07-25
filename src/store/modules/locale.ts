import { ref } from 'vue';
import type { LocaleType } from '@/types/index';
import { defineStore } from 'pinia';

export default defineStore('locale', () => {
  const locale = ref<LocaleType>('zh_CN');

  const setLocale = (value: LocaleType) => {
    locale.value = value;
  };

  return { locale, setLocale };
});
