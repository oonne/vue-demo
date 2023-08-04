<script setup lang="ts">
import { auth } from '@/api/index';

auth.test1({ a: 'test1' });
</script>

<template>
  <div class="login-bg">
    <div class="login-warp">
      <a-button type="primary">
        {{ $t('btn_login') }}
      </a-button>
    </div>
  </div>
</template>

<style scoped>
.login-bg{
  min-height: 100vh;
  background: url('@/assets/imgs/login-bg.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-warp{
  width: 600px;
  height: 400px;
  background: #fff;
}
</style>
