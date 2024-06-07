<script setup lang="ts">
import { theme } from '@/config/theme'

const props = withDefaults(
  defineProps<{
    icon: string
    type: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  }>(),
  {}
)

const [visible, setVisible] = useVisible(true)
const color = computed(() => theme[props.type])
</script>

<template>
  <view class="page-tag flex items-center py-10 px-20 rounded-8 justify-between" :class="type" v-if="visible">
    <render-svg :src="icon" theme :color="color" class="w-40 h-40 mr-20" v-if="icon" />
    <view class="flex-1 text-26 text-custom-85">
      <slot></slot>
    </view>
    <render-svg src="/static/icon/close.svg" theme :color="color" class="w-40 h-40 ml-20" @click="setVisible(false)" />
  </view>
</template>

<style lang="less" scoped>
.page-tag {
  border: 1px solid transparent;
  @themes: {
    primary: @color-primary;
    success: @color-success;
    warning: @color-warning;
    danger: @color-danger;
    info: @color-info;
  };
  each(@themes,{
    &.@{key}{
      border-color: @value;
      background: rgba(@value, 10%);
    }
  });
}
</style>
