import PackageJson from '../../package.json';
import { DEFAULT_SYSTEM_NAME } from './default';

const baseUrl = import.meta.env.VITE_BASE_URL;
const ossUrl = import.meta.env.VITE_OSS_URL;

export default {
  version: PackageJson.version,
  source: 3,
  // 系统名
  systemName: DEFAULT_SYSTEM_NAME,
  // 主题色
  colorPrimary: '#007FFF',

  // 环境变量
  baseUrl,
  ossUrl,
};
