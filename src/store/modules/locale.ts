import { ref } from 'vue';
import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import zhTW from 'ant-design-vue/es/locale/zh_TW';
import enUS from 'ant-design-vue/es/locale/en_US';
import type { LocaleType } from '@/types/index';

import 'dayjs/locale/zh-cn';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/en';

/*
 * 语言常量
 */
const localeSettings = {
  zh_CN: {
    antLocale: zhCN,
    dayjsLocale: 'zh-cn',
  },
  zh_TW: {
    antLocale: zhTW,
    dayjsLocale: 'zh-tw',
  },
  en_US: {
    antLocale: enUS,
    dayjsLocale: 'en',
  },
};

/*
 * 多语言设置
 */
export default defineStore('locale', () => {
  // 当前语言
  const locale = ref<LocaleType>('zh_CN');
  const antLocale = ref(zhCN);
  const setLocale = (value: LocaleType) => {
    locale.value = value;
    antLocale.value = localeSettings[value].antLocale;
    dayjs.locale(localeSettings[value].dayjsLocale);
  };

  // 预设语言
  // TODO

  // 更改语言设置
  // TODO

  return { locale, antLocale, setLocale };
});
