<template>
  <el-button type="primary">登录</el-button>
  <el-tag>{{ hitokoto }}</el-tag>
</template>

<script setup lang="ts">
import { getHitokoto } from '@/api/hitokoto'

const hitokoto = ref(null)

onMounted(() => {
  getHitokoto().then((res: any) => {
    hitokoto.value = res.hitokoto
  })
})
</script>

<style scoped></style>
