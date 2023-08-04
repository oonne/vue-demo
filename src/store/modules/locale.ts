import { ref } from 'vue';
import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import i18n from '@/locales/i18n';
import { DEFAULT_LOCALE } from '@/config/default';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import zhTW from 'ant-design-vue/es/locale/zh_TW';
import enUS from 'ant-design-vue/es/locale/en_US';
import type { LocaleType, LocaleSetting } from '@/types/index';

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

/**
 * 获取浏览器默认的语言
 */
const getSystemLang = (): LocaleType => {
  const { language } = window.navigator;

  // 简体中文
  if (language === 'zh-CN') {
    return 'zh_CN';
  }
  // 其他中文默认繁体
  if (language.includes('zh')) {
    return 'zh_TW';
  }
  // 英文
  if (language === 'en') {
    return 'en_US';
  }

  // 缺省语言
  return DEFAULT_LOCALE;
};

/*
 * 多语言设置
 */
export default defineStore('locale', () => {
  // 当前语言
  const localeSetting = ref<LocaleSetting>('SYSTEM');
  const locale = ref<LocaleType>(DEFAULT_LOCALE);
  const antLocale = ref(localeSettings[DEFAULT_LOCALE].antLocale);

  // 更改语言
  const setLocale = (value: LocaleType) => {
    locale.value = value;
    i18n.global.locale = value;
    antLocale.value = localeSettings[value].antLocale;
    dayjs.locale(localeSettings[value].dayjsLocale);
  };

  // 更改语言设置
  const setLocaleSetting = (setting: LocaleSetting) => {
    localeSetting.value = setting;
    localStorage.setItem('LOCALE_SETTING', setting);

    if (setting === 'SYSTEM') {
      setLocale(getSystemLang());
      return;
    }

    setLocale(setting);
  };

  // 预设语言
  const initLocaleSetting = () => {
    const storageLocale = localStorage.getItem('LOCALE_SETTING');
    if (!storageLocale) {
      setLocaleSetting('SYSTEM');
      return;
    }

    setLocaleSetting(storageLocale as LocaleSetting);
  };

  return {
    localeSetting, locale, antLocale, setLocale, setLocaleSetting, initLocaleSetting,
  };
});
