<script setup lang="ts">
import { useConfigStore } from '@/stores/config'

const router = useRouter()
const { toast } = useToast()
const { colorValidator } = useRegExp()
const state = useConfigStore()

/**
 * 输入的颜色值
 */
const inputValue = ref('')

/**
 * 提交表单
 */
const onSubmit = () => {
  if (!inputValue.value) return toast('请输入自定义颜色')
  if (!colorValidator(inputValue.value)) return toast('颜色格式错误')
  if (state.themes.includes(inputValue.value)) return toast('颜色已存在')
  state.updateTempTheme(inputValue.value)
  router.back()
}

onLoad(() => {
  state.updateTempTheme('')
})
</script>

<template>
  <page-custom>
    <view class="p-30">
      <input type="text" class="rounded-6 bg-zinc-100 h-80 px-30 text-26" v-model="inputValue" @confirm="onSubmit" placeholder="请输入自定义颜色，如#000000" />
    </view>
    <template #footer>
      <page-button type="primary" class="mb-20" @click="onSubmit">提交</page-button>
    </template>
  </page-custom>
</template>
