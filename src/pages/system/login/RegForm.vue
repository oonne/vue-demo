<!-- 注册表单 -->
<template>
  <div class="login-bg">
    <div class="login-warp">
      <div class="title">{{ $t('system.title_register') }}</div>

      <a-form
        name="login"
        :model="formState"
        :colon="false"
        hide-required-mark
        scroll-to-first-error
        @submit="onSubmit"
      >
        <a-form-item
          name="account"
          :rules="[{ required: true, message: `${$t('common.msg_please_enter')}${$t('common.account')}` }]"
        >
          <a-input
            v-model:value="formState.account"
            :placeholder="$t('common.account')"
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
            :loading="regLoading"
            :disabled="regBtnDisabled"
            html-type="submit"
          >
            {{ $t('system.btn_register') }}
          </a-button>
        </a-form-item>

        <div class="bottom-links">
          <a-button type="link" @click="toPage('login')">{{ $t('system.link_login') }}</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { Utils } from '@/utils/index';
import type { RegFormState } from './type';

const router = useRouter();
const { sleep } = Utils;

/* 
 * 表单
 */
const formState = reactive<RegFormState>({
  account: '',
  password: '',
});
const regLoading = ref(false);
const regBtnDisabled = computed(() => !(formState.account && formState.password));

// 提交表单
const onSubmit = async () => {
  const { account, password } = formState;
  console.log(account, password);

  regLoading.value = true;

  await sleep(300);
  regLoading.value = false;
  message.success('注册成功');
};

/* 
 * 跳转链接
 */
const toPage = (name: string) => {
  router.push({ name });
}

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
