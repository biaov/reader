<script setup lang="ts">
const [config, setConfig] = useConfig()
const router = useRouter()

const selectTheme = ref(config.value.theme)

const onSwitchTheme = (item: string) => {
  selectTheme.value = item
}

const onAddTheme = () => {
  router.push('/pages/mine/theme/add')
}

const onUpdateTheme = () => {
  setConfig({ theme: selectTheme.value })
  router.back()
}
</script>

<template>
  <page-custom>
    <view class="p-30 text-26">
      <page-tag icon="/static/icon/smile.svg" closable type="warning" class="mb-20">点击下面主题色切换主题</page-tag>
      <page-tag icon="/static/icon/remove.svg" closable type="danger" class="mb-40">长按可以删除主题</page-tag>
      <view class="mb-20">
        <view class="mb-30">切换主题：</view>
        <view class="flex flex-wrap theme-list">
          <view
            v-for="(item, index) in config.themes"
            :key="index"
            :style="`--theme:${item};`"
            :class="selectTheme === item ? 'active' : ''"
            class="item relative w-80 h-80 rounded-full mr-40 mb-40"
            @click="onSwitchTheme(item)"
          ></view>
        </view>
      </view>
    </view>
    <template #footer>
      <page-button type="primary" class="mb-20" @click="onAddTheme">新增自定义主题</page-button>
      <page-button type="primary" @click="onUpdateTheme">提交主题修改</page-button>
    </template>
  </page-custom>
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
