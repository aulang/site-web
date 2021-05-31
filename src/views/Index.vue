<template>
  <el-container class="index">
    <el-header height="">
      <wl-header></wl-header>
    </el-header>

    <el-main>
      <el-row
        type="flex"
        :gutter="18"
      >
        <el-col :span="20">
        </el-col>

        <el-col :span="6">
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
import BeiAnInfo from '@/components/BeiAnInfo.vue';
import WlHeader from '@/components/Header.vue';
import Author from '@/components/Author.vue';
export default {
  components: { BeiAnInfo, WlHeader, Author },
};
</script>

<style scoped>
.index {
  width: 90%;
  display: inline-flex;
}
</style>