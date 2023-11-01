// 登录表单
export interface LoginFormState {
  loginName: string;
  password: string;
}

// 注册表单
export interface RegFormState {
  account: string;
  password: string;
}

// 重置密码表单
export interface ResetFormState {
  type: 'phone' | 'email';
  phone?: string;
  email?: string;
}
