import axios from 'axios';
import { storeToRefs } from 'pinia';
import { useUserStore, useLocaleStore } from '@/store/index';
import config from '../config/index';
import { Utils } from '../utils/index';

const {
  version, source, baseUrl, apiTimeOut,
} = config;
const { randomChars } = Utils;
const localeStore = useLocaleStore();
const { locale } = storeToRefs(localeStore);
const userStore = useUserStore();
const {
  corpInfo, userInfo, uuid, token,
} = storeToRefs(userStore);

/*
 * 生成请求id
 * 格式： 来源+连词符+毫秒时间戳+连词符+UUID末4位+连词符+4位随机数
 */
const generateReqId = () => `${source}-${(new Date()).getTime()}-${uuid.value.slice(-4)}-${randomChars(4)}`;

/*
 * 请求实体
 */
const instance = axios.create({
  baseURL: baseUrl,
  timeout: apiTimeOut,
  method: 'post',
});
instance.interceptors.request.use(
  (reqOptions) => {
    const options = reqOptions;
    options.headers['Content-Type'] = 'application/json; charset=utf-8';
    options.headers['af-source'] = source;
    options.headers['af-uuid'] = uuid.value;
    options.headers['af-reqid'] = generateReqId();
    options.headers['af-version'] = version;
    options.headers['af-lang'] = locale.value;
    options.headers['af-corpid'] = corpInfo.value?.corpId;
    options.headers['af-userid'] = userInfo.value?.userId;
    options.headers['af-token'] = token.value;
    return options;
  },
  (error) => Promise.reject(error),
);
instance.interceptors.response.use(
  (res) => {
    const { data, status } = res;
    if (status === 200 && data.code === 0) {
      return Promise.resolve(data);
    }
    return Promise.reject(data);
  },
  (error) => Promise.reject(error),
);

export default instance;
