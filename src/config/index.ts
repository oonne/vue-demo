import PackageJson from '../../package.json';
import { DEFAULT_SYSTEM_NAME } from './default';

export default {
  version: PackageJson.version,
  source: 3,
  // 系统名
  systemName: DEFAULT_SYSTEM_NAME,
  // 主题色
  colorPrimary: '#007FFF',
};
