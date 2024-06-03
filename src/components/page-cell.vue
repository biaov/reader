<script setup lang="ts">
withDefaults(
  defineProps<{
    height?: string
    icon?: string
    title: string
    arrow?: boolean
    border?: boolean
  }>(),
  {
    height: '88rpx',
    arrow: true,
    border: false
  }
)
</script>

<template>
  <view class="px-30" :style="`height:${height};`">
    <view class="flex justify-between items-center h-full">
      <view class="flex item-center">
        <render-svg :src="icon" theme class="w-36 h-36 mr-20" v-if="icon" />
        <view class="color-85 text-26">{{ title }}</view>
      </view>
      <image class="w-30 h-30" mode="widthFix" src="/static/icon/right.svg" v-if="arrow"></image>
    </view>
    <view class="h-2 w-full bg-2" v-if="border"></view>
  </view>
</template>
