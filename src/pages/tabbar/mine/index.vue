<script setup lang="ts">
const { onNavto } = useRouter()
</script>

<template>
  <screen-custom>
    <view class="flex justify-between px-30 py-30">
      <view class="color-85 text-36 font-bold">我的</view>
      <image src="/static/icon/setting.svg" mode="widthFix" class="w-40 h-40"></image>
    </view>
    <scroll-view scroll-y class="grow h-200">
      <view class="p-30 pt-20">
        <view class="rounded-10 bg-white mb-20 shadow">
          <page-cell icon="/static/icon/setting.svg" title="主题设置" border @click="onNavTo('/pages/mine/theme/index')" />
          <page-cell icon="/static/icon/reading.svg" title="阅读设置" border @click="onNavTo('/pages/mine/reading/index')" />
          <page-cell icon="/static/icon/aboutus.svg" title="关于我们" @click="onNavTo('/pages/mine/aboutus/index')" />
        </view>
      </view>
    </scroll-view>
  </screen-custom>
</template>
