<!-- 登录表单 -->
<template>
  <div class="login-bg">
    <div class="login-warp">
      <a-form
        name="login"
        :model="formState"
        :colon="false"
        hide-required-mark
        scroll-to-first-error
        @submit="onSubmit"
      >
        <a-form-item
          name="loginName"
          :rules="[{ required: true, message: `${$t('common.msg_please_enter')}${$t('system.login_name')}` }]"
        >
          <a-input
            v-model:value="formState.loginName"
            :placeholder="$t('system.login_name')"
          >
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: `${$t('common.msg_please_enter')}${$t('common.password')}` }]"
        >
          <a-input-password v-model:value="formState.password" :placeholder="$t('common.password')">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-button
            type="primary"
            class="submit-btn"
            :loading="loginLoading"
            :disabled="loginBtnDisabled"
            html-type="submit"
          >
            {{ $t('system.btn_login') }}
          </a-button>
        </a-form-item>

        <div class="bottom-links">
          <a-button type="link">{{ $t('system.link_forget_password') }}</a-button>
          <a-button type="link">{{ $t('system.link_register') }}</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import {message} from 'ant-design-vue';
import {Utils} from '@/utils/index';
import type { FormState } from './type';

const {sleep} = Utils;

const formState = reactive<FormState>({
  loginName: '',
  password: '',
});
const loginLoading = ref(false);

const loginBtnDisabled = computed(() => !(formState.loginName && formState.password));

// 提交
const onSubmit = async () => {
  const {loginName, password} = formState;
  console.log(loginName, password);

  loginLoading.value = true;

  await sleep(300);
  loginLoading.value = false;
  message.success('登录成功');
};

</script>

<style scoped>
.login-bg{
  background: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-warp{
  width: 400px;
  background: #fff;
  padding: 30px 40px;
}

.site-form-item-icon{
  color: rgba(0,0,0,.25);
}

.submit-btn{
  width: 100%;
}

.bottom-links{
  display: flex;
  justify-content: space-between;
}
</style>
