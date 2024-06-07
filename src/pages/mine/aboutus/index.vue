<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME
const { open } = useRouter()
</script>

<template>
  <view class="flex flex-col items-center pt-100 text-26">
    <image src="/static/logo.svg" mode="widthFix" class="w-200 h-200 mb-40"></image>
    <view class="p-30">
      <view class="flex items-center mb-20">
        <view class="text-primary mr-10 font-bold">{{ appName }}</view>
        是一个小说阅读器。
      </view>
      <view class="mb-20">
        如果你想自定义一些内容，请前往参与开发：
        <view class="text-primary font-bold" @click="open('https://github.com/biaov/reader')">https://github.com/biaov/reader</view>
      </view>
      <view class="mb-20">
        如果你对于 {{ appName }} 有什么建议，请前往：
        <view class="text-primary font-bold" @click="open('https://github.com/biaov/reader/discussions')">https://github.com/biaov/reader/discussions</view>
      </view>
      <view>
        如果你在使用 {{ appName }} 中遇到了什么疑问或者 bug，请前往提交：
        <view class="text-primary font-bold" @click="open('https://github.com/biaov/reader/issues')">https://github.com/biaov/reader/issues</view>
      </view>
    </view>
  </view>
</template>
