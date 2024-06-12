<script setup lang="ts">
import type { PageGuide } from './types'

const props = withDefaults(
  defineProps<{
    visible: boolean
    list: PageGuide.Guide[]
  }>(),
  {
    visible: false,
    list: () => []
  }
)
const emit = defineEmits<{
  (event: 'update:visible', value: boolean): void
}>()

const showIndex = ref(0)
const { isShow, onOpen, onClose, duration } = useVisibleAnimation({
  props,
  emit,
  init() {
    showIndex.value = 0
  }
})

watch(
  () => props.visible,
  value => {
    value && onOpen()
  },
  { immediate: true }
)

const getMaskStyle = computed(() => {
  const item = props.list[showIndex.value]
  if (!item) return ''
  const { x, y, w } = props.list[showIndex.value].mask
  return `mask-image: radial-gradient(circle at ${x}px ${y}px, transparent ${w}px, black ${w}px);`
})

const onNext = () => {
  showIndex.value++
  showIndex.value >= props.list.length && onClose()
}
</script>

<template>
  <view
    class="fixed top-0 left-0 bg-custom-60 z-50 w-full h-full transition-opacity"
    :class="[isShow ? 'opacity-100' : 'opacity-0', `duration-${duration}`]"
    :style="getMaskStyle"
    @click="onNext"
    v-if="visible"
  >
    <view v-for="(item, index) in list" :key="index" :class="showIndex === index ? 'opacity-100' : 'opacity-0'" class="transition-opacity duration-700">
      <render-svg :src="item.icon.url" class="absolute" :style="`left:${item.icon.x}px;top:${item.icon.y}px;width:${item.icon.w}px;height:${item.icon.h}px;`" />
      <view :style="`left:${item.text.x}px;top:${item.text.y}px;`" class="absolute text-white text-30">{{ item.text.value }}</view>
      <view class="absolute bottom-200 left-1/2 text-30 text-white border-2 border-white rounded-10 w-200 h-80 flex justify-center items-center next-btn">下一步</view>
    </view>
  </view>
</template>

<style lang="less" scoped>
.next-btn {
  transform: translateX(-50%);
}
</style>
