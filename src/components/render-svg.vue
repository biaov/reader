<script setup lang="ts">
import { loadFileContent } from '@/utils/request'

const props = withDefaults(
  defineProps<{
    src: string
    theme?: boolean
    color?: string
    mode?: string
  }>(),
  {
    theme: false,
    mode: 'widthFix'
  }
)

const svgContent = ref(props.src)
const [config] = useConfig()
const renderSvg = (content: string) => {
  const color = props.color || config.value.theme
  const data = content.replace(/#[a-z0-9]{3,6}/gi, color)
  svgContent.value = `data:image/svg+xml,${encodeURIComponent(data)}`
}
/**
 * 初始化 svg 内容
 */
const initSvgContent = async () => {
  if (!props.theme) return
  // #ifdef H5
  const fileContent = await loadFileContent(props.src)
  renderSvg(fileContent)
  // #endif
  // #ifndef H5
  uni.getFileSystemManager().readFile({
    filePath: props.src,
    encoding: 'utf8',
    success: ({ data }) => {
      renderSvg(data as string)
    }
  })
  // #endif
}

watch(() => [props.src, props.color], initSvgContent, { immediate: true })
</script>

<template>
  <image v-bind="{ ...$attrs, mode, src: svgContent }"></image>
</template>
