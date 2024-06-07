<script setup lang="ts">
withDefaults(
  defineProps<{
    type: 'primary' | 'success' | 'warning' | 'danger' | 'info'
    ghost: boolean
  }>(),
  {
    ghost: false
  }
)
</script>

<template>
  <view class="page-button h-80 flex justify-center items-center text-white text-28 rounded-8" :class="[type, ghost ? 'ghost' : '']">
    <slot></slot>
  </view>
</template>

<style lang="less" scoped>
.page-button {
  border: 1px solid transparent;

  @themes: {
    primary: @color-primary;
    success: @color-success;
    warning: @color-warning;
    danger: @color-danger;
    info: @color-info;
  };

  each(@themes, {
    &.@{key} {
      border-color: @value;
      background: @value;

      &.ghost {
        background: transparent;
        color: @value;
      }
    }
  });
}
</style>
