<template>
  <div class="flex justify-between m-6">
    <div class="space-x-4">
      <el-link type="success">success</el-link>
      <el-link type="success">success</el-link>
      <el-link type="success">success</el-link>
    </div>
    <div>
      <el-input v-model="keyword" placeholder="输入关键字搜索">
        <template #append>.com</template>
      </el-input>
    </div>
  </div>

  <div class="flex justify-center items-center">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-button type="primary">登录</el-button>
        <el-tag>{{ hitokoto }}</el-tag>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { getHitokoto } from '@/api/hitokoto'

const keyword = ref('')
const hitokoto = ref(null)

onMounted(() => {
  getHitokoto().then((res: any) => {
    hitokoto.value = res.hitokoto
  })
})
</script>

<style scoped>
.el-link {
  font-size: 18px;
}
</style>
