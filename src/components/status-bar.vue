<script setup lang="ts">
const { statusBarHeight } = uni.getSystemInfoSync()
</script>
<template>
  <view :style="`height: ${statusBarHeight}px;`"></view>
</template>
