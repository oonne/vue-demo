<script setup lang="ts">
</script>

<template>
  <div>
    <div>layout</div>

    <router-view>
      <template #default="{ Component, route }">
        <KeepAlive>
          <component
            :is="Component"
            :key="route.fullPath"
          />
        </KeepAlive>
      </template>
    </router-view>
  </div>
</template>

<style>
</style>
