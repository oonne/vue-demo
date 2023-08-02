import { ref } from 'vue';
import { defineStore } from 'pinia';
import config from '@/config';
import { Utils } from '@/utils/index';
import type { CorpInfo, UserInfo } from '@/types/index';

const { source } = config;
const { randomChars } = Utils;

/*
 * 生成UUID
 * 格式： 来源+连词符+12位随机数字或字母（或广告ID末12位）+连词符+4位随机数字或字母
 */
const generateUUID = () => `${source}-${randomChars(12)}-${randomChars(4)}`;

/*
 * 企业和用户信息
 */
export default defineStore('account', () => {
  const corpInfo = ref<CorpInfo>({});
  const userInfo = ref<UserInfo>({});
  const uuid = ref('');
  const token = ref('');

  // 清空所有信息（信息异常、退出登录的时候调用）
  const clear = () => {
    localStorage.removeItem('TOKEN');
    token.value = '';

    localStorage.removeItem('CORP_INFO');
    corpInfo.value = {};

    localStorage.removeItem('USER_INFO');
    userInfo.value = {};
  };

  // UUID
  const initUUID = () => {
    let uuidValue = localStorage.getItem('UUID');
    if (!uuidValue) {
      uuidValue = generateUUID();
      localStorage.setItem('UUID', uuidValue);
    }
    uuid.value = uuidValue;
  };

  // Token
  const initToken = () => {
    const tokenValue = localStorage.getItem('TOKEN');
    if (!tokenValue) {
      clear();
      return;
    }
    token.value = tokenValue;
  };

  const setToken = (value: string) => {
    localStorage.setItem('TOKEN', value);
    token.value = value;
  };

  // 企业信息
  const initCorpInfo = () => {
    const corpInfoStorage = localStorage.getItem('CORP_INFO');
    if (!corpInfoStorage) {
      clear();
      return;
    }

    try {
      const corpInfoValue = JSON.parse(corpInfoStorage);
      corpInfo.value = JSON.parse(corpInfoValue);
    } catch (error) {
      console.warn('企业信息读取错误', error);
      clear();
    }
  };

  const setCorpInfo = (value: CorpInfo) => {
    if (!value.corpId) {
      clear();
      return;
    }

    localStorage.setItem('CORP_INFO', JSON.stringify(value));
    corpInfo.value = value;
  };

  // 用户信息
  const initUserInfo = () => {
    const userInfoStorage = localStorage.getItem('USER_INFO');
    if (!userInfoStorage) {
      clear();
      return;
    }

    try {
      const userInfoValue = JSON.parse(userInfoStorage);
      userInfo.value = JSON.parse(userInfoValue);
    } catch (error) {
      console.warn('用户信息读取错误', error);
      clear();
    }
  };

  const setUserInfo = (value: UserInfo) => {
    if (!value.userId) {
      clear();
      return;
    }

    localStorage.setItem('USER_INFO', JSON.stringify(value));
    userInfo.value = value;
  };

  // 初始化
  const init = async () => {
    initUUID();
    initToken();
    initCorpInfo();
    initUserInfo();
  };

  return {
    corpInfo,
    userInfo,
    uuid,
    token,

    setToken,
    setCorpInfo,
    setUserInfo,
    init,
  };
});
