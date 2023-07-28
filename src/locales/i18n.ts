import { createI18n } from 'vue-i18n';
import { DEFAULT_LOCALE } from '@/config/default';
import zhCN from './lang/zh_CN';
import zhTW from './lang/zh_TW';
import enUS from './lang/en_US';

const i18n = createI18n({
  locale: DEFAULT_LOCALE,
  messages: {
    zh_CN: zhCN,
    zh_TW: zhTW,
    en_US: enUS,
  },
});

export default i18n;
