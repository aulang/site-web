<template>
  <el-container class="layout">
    <el-header height="">
      <wl-header></wl-header>
    </el-header>

    <el-main>
      <el-row
        type="flex"
        :gutter="18"
      >
        <el-col :span="19">
          <slot>

          </slot>
        </el-col>

        <el-col :span="5">
          <author></author>
        </el-col>
      </el-row>

    </el-main>

    <el-footer height="">
      <bei-an-info></bei-an-info>
    </el-footer>

  </el-container>
</template>

<script>
import Author from '@/components/Author.vue';
import WlHeader from '@/components/Header.vue';
import BeiAnInfo from '@/components/BeiAnInfo.vue';

export default {
  name: 'Layout',
  components: { BeiAnInfo, WlHeader, Author }
}
</script>

<style scoped>
.layout {
  width: 90%;
  display: inline-flex;
}
</style>