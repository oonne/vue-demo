// 时间
export type Timer = ReturnType<typeof setTimeout> | null;
export type Interval = ReturnType<typeof setInterval> | null;

// 语言类型
export type LocaleType = 'zh_CN' | 'zh_TW' | 'en_US';
export type LocaleSetting = 'SYSTEM' | LocaleType;

// 企业信息
export interface CorpInfo {
  corpId?: string;
}

// 用户信息
export interface UserInfo {
  userId?: string;
}
