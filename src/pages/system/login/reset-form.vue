<!-- 忘记密码表单 -->
<template>
  <div class="login-bg">
    <div class="login-warp">
      <div class="title">
        {{ $t('system.title_reset_password') }}
      </div>

      <a-form
        name="login"
        :model="formState"
        :colon="false"
        hide-required-mark
        scroll-to-first-error
        @submit="onSubmit"
      >
        <!-- 邮箱或手机 -->
        <a-form-item>
          <a-radio-group v-model:value="formState.type">
            <a-radio-button value="phone">
              {{ $t('common.phone') }}
            </a-radio-button>
            <a-radio-button value="email">
              {{ $t('common.email') }}
            </a-radio-button>
          </a-radio-group>
        </a-form-item>

        <!-- 手机 -->
        <a-form-item
          v-if="formState.type === 'phone'"
          :rules="[{
            required: true,
            message: `${$t('common.msg_please_enter')}${$t('common.phone')}`
          }]"
        >
          <a-input
            v-model:value="formState.phone"
            :placeholder="$t('common.phone')"
          >
            <template #prefix>
              <PhoneOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <!-- 邮箱 -->
        <a-form-item
          v-if="formState.type === 'email'"
          :rules="[{
            required: true,
            message: `${$t('common.msg_please_enter')}${$t('common.email')}`
          }]"
        >
          <a-input
            v-model:value="formState.email"
            :placeholder="$t('common.email')"
          >
            <template #prefix>
              <MailOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-button
            type="primary"
            class="submit-btn"
            :loading="resetLoading"
            :disabled="resetBtnDisabled"
            html-type="submit"
          >
            {{ $t('system.btn_reset_password') }}
          </a-button>
        </a-form-item>

        <div class="bottom-links">
          <a-button
            type="link"
            @click="toPage('login')"
          >
            {{ $t('system.link_login') }}
          </a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { Utils } from '@/utils/index';
import type { ResetFormState } from './type';

const router = useRouter();
const { sleep } = Utils;

/*
 * 表单
 */
const formState = reactive<ResetFormState>({
  type: 'phone',
  phone: '',
  email: '',
});
const resetLoading = ref(false);
const resetBtnDisabled = computed(() => !(formState.phone || formState.email));

// 提交表单
const onSubmit = async () => {
  const { type, phone, email } = formState;
  console.log(type, phone, email);

  resetLoading.value = true;

  await sleep(300);
  resetLoading.value = false;

  // 功能待定 TODO
  if (type === 'phone') {
    message.success('验证码已发送至手机');
  }
  if (type === 'email') {
    message.success('重置链接已发送至邮箱');
  }
};

/*
 * 跳转链接
 */
const toPage = (name: string) => {
  router.push({ name });
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

.title{
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  color: #333;
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
