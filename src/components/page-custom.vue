<script setup lang="ts">
const { iosBottomHeight, windowHeight } = useSystemInfo()
const sys = uni.getSystemInfoSync()
</script>

<template>
  <!-- <view class="flex flex-col justify-between w-screen" :style="`height:${windowHeight - iosBottomHeight / 2}px;`"> -->
  <view class="flex flex-col justify-between w-screen" :style="`height:${windowHeight}px;`">
    <scroll-view scroll-y class="flex-grow h-500">
      <slot></slot>
    </scroll-view>
    <view class="footer p-30 bg-white">
      <slot name="footer"></slot>
    </view>
  </view>
</template>
