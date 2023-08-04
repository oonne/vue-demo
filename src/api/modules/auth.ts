import request from '../req';

export default {
  // 测试
  test1(data: object) {
    return request({
      url: '/auth/test_1',
      data,
    });
  },
};
