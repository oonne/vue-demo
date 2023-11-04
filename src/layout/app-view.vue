<template>
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
</template>
