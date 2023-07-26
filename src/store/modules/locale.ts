import { ref } from 'vue';
import type { LocaleType } from '@/types/index';
import { defineStore } from 'pinia';

export default defineStore('locale', () => {
  // 语言设置
  const locale = ref<LocaleType>('zh_CN');
  const setLocale = (value: LocaleType) => {
    locale.value = value;
  };

  // 预设语言
  // TODO

  // 更改语言设置
  // TODO

  return { locale, setLocale };
});
