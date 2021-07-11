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
          <author />
          <category class="mt" />
          <friendly-link class="mt" />
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
import Category from '@/components/Category.vue';
import BeiAnInfo from '@/components/BeiAnInfo.vue';
import FriendlyLink from '@/components/FriendlyLink.vue';

export default {
  name: 'Layout',
  components: { BeiAnInfo, WlHeader, Author, FriendlyLink, Category }
}
</script>

<style scoped>
.layout {
  width: 90%;
  display: inline-flex;
}
.mt {
  margin-top: 0.5rem;
}
</style>