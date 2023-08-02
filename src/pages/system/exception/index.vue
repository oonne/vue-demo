<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import i18n from '@/locales/i18n';
import type { ExcrptionCode } from './types';

// 错误码和提示语
const route = useRoute();
const code = ref(route.name as ExcrptionCode);
const subTitle = computed(() => {
  if (code.value === '403') {
    return i18n.global.t('exception_403');
  }
  if (code.value === '404') {
    return i18n.global.t('exception_404');
  }
  if (code.value === '500') {
    return i18n.global.t('exception_500');
  }
  return '';
});

// 返回
const router = useRouter();
const back = () => {
  router.replace({ name: 'login' });
};

</script>

<template>
  <a-result
    :status="code"
    :title="code"
    :sub-title="subTitle"
  >
    <template #extra>
      <a-button
        type="primary"
        @click="back"
      >
        {{ $t('btn_back') }}
      </a-button>
    </template>
  </a-result>
</template>

<style scoped>
</style>
