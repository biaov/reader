<script setup lang="ts">
const { windowHeight } = uni.getSystemInfoSync()
</script>

<template>
  <view class="w-screen flex flex-col full-content" :style="`height:${windowHeight}px;`">
    <status-bar />
    <view class="flex-1 w-full flex flex-col">
      <slot></slot>
    </view>
  </view>
</template>
<style lang="less" scoped>
.full-content {
  background: linear-gradient(0deg, #fff 0%, #e7f0fd 100%);
}
</style>
