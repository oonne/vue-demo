<script setup lang="ts">
import { auth } from '@/api/index';

auth.test1({ a: 'test1' });
</script>

<template>
  <div class="login-bg">
    登录页面TODO
  </div>
</template>

<style scoped>
.login-bg{
  min-height: 100vh;
  background: url('@/assets/imgs/login-bg.png');
  background-size: cover;
}
</style>
