<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import type { ExcrptionCode } from './types';

// 错误码
const route = useRoute();
const code = ref(route.name as ExcrptionCode);
</script>

<template>
  <a-result
    :status="code"
    :title="code"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<style scoped>
</style>
