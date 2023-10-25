<script setup lang="ts">
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
  background: #f5f5f5;
  min-height: 100vh;
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
