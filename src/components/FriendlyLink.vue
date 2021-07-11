<template>
  <el-card class="box-card">
    <div slot="header">
      <span>友情连接</span>
    </div>
    <el-row
      class="box-row"
      v-for="link in links"
      :key="link.title"
    >
      <el-link
        type="success"
        target="_blank"
        :href="link.url"
        :title="link.desc"
        v-text="link.title"
      >
      </el-link>
    </el-row>
  </el-card>
</template>

<script>
import { loadConfig } from '@/store/localstore';
export default {
  name: 'FriendlyLink',
  data() {
    return {
      links: []
    }
  },
  created() {
    let config = loadConfig();
    if (!config) {
      return;
    }

    this.links = config.links;
  }
}
</script>

<style scoped>
.box-card {
  text-align: left;
}
.box-row {
  padding-bottom: 0.5rem;
}
</style>