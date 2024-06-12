<script setup lang="ts">
import { useGuide, useTheme } from './hooks'

const [guideVisible, setGuideVisible] = useVisible(true)
const { guideList } = useGuide()
const { selectTheme, themes, onSaveTheme, onReceive, onRemoveTheme, onAddTheme, onSwitchTheme } = useTheme()
</script>

<template>
  <page-custom>
    <view class="p-30 text-26">
      <!-- <page-tag icon="/static/icon/smile.svg" closable type="warning" class="mb-20">点击下面主题色切换主题</page-tag>
      <page-tag icon="/static/icon/remove.svg" closable type="danger" class="mb-40">长按可以删除主题</page-tag> -->
      <view class="mb-20">
        <view class="mb-40 flex justify-between items-center">
          <view class="flex items-center">
            <render-svg src="/static/icon/help.svg" class="w-30 h-30 mr-10" @click="setGuideVisible(true)" />
            <view class="text-28">切换主题：</view>
          </view>
          <view class="text-custom-45 text-24" @click="onReceive">恢复默认主题</view>
        </view>
        <view class="flex flex-wrap theme-list">
          <view
            v-for="(item, index) in themes"
            :key="index"
            :style="`--theme:${item};`"
            :class="selectTheme === item ? 'active' : ''"
            class="item relative w-106 h-106 rounded-full mr-40 mb-40"
            @click="onSwitchTheme(item)"
            @longpress="onRemoveTheme(item)"
          ></view>
        </view>
      </view>
    </view>
    <template #footer>
      <page-button type="success" class="mb-20" @click="onAddTheme">新增自定义主题</page-button>
      <page-button type="primary" :style="`background:${selectTheme};border-color:${selectTheme};`" @click="onSaveTheme">保存主题更改</page-button>
    </template>
  </page-custom>
  <page-guide :list="guideList" v-model:visible="guideVisible" />
</template>

<style lang="less" scoped>
.theme-list {
  width: calc(100% + 40rpx);
  .item {
    background: var(--theme);
    &::after {
      content: '';
      position: absolute;
      width: 120%;
      height: 120%;
      border-radius: 50%;
      border: 4rpx solid var(--theme);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    &.active::after {
      opacity: 1;
    }
  }
}
</style>
