<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.path);
</script>

<template>
  <a-result
    status="404"
    title="404"
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
