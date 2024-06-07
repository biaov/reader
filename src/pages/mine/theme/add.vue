<script setup lang="ts">
const [config, setConfig] = useConfig()
const router = useRouter()
const inputValue = ref('')

const onSubmit = () => {
  setConfig({ themes: [...config.value.themes, inputValue.value] })
  router.back()
}
</script>

<template>
  <page-custom>
    <view class="p-30 mb-20">
      <input type="text" class="bound" v-model="inputValue" @confirm="onSubmit" />
    </view>
    <template #footer>
      <page-button type="primary" class="mb-20" @click="onSubmit">提交</page-button>
    </template>
  </page-custom>
</template>

<style lang="less" scoped></style>
