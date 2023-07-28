// 时间
export type Timer = ReturnType<typeof setTimeout> | null;
export type Interval = ReturnType<typeof setInterval> | null;

// 语言类型
export type LocaleType = 'zh_CN' | 'zh_TW' | 'en_US';
export type LocaleSetting = 'SYSTEM' | LocaleType;
