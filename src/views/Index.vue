<template>
  <layout>
    <el-card class="box-card">
      <div
        slot="header"
        class="title"
      >
        <router-link
          class="el-link el-link--default"
          :to="'/article/' + id"
        >
          <span v-text="title"></span>
        </router-link>
      </div>

      <div
        class="article"
        v-html="html"
      >
      </div>
    </el-card>

    <el-row
      type="flex"
      class="page"
      justify="space-between"
    >
      <el-button type="text">
        <i class="fas fa-arrow-left"></i>
        &emsp;<span>上一页</span>
      </el-button>
      <el-button type="text">
        <span>下一页</span>&emsp;
        <i class="fas fa-arrow-right"></i>
      </el-button>
    </el-row>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import { getArticlesByPage } from '@/api/article';

export default {
  components: { Layout },
  data() {
    return {
      id: '',
      title: '',
      html: ''
    }
  },
  created() {
    getArticlesByPage(1, 2).then(response => {
      if (response.data.records) {
        this.id = response.data.records[0].id;
        this.title = response.data.records[0].title;
        this.html = response.data.records[0].content;
      }
    });
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: left;
}

.title span {
  font-size: 18px;
}

.article {
  width: 100%;
  text-align: left;
}

.page span {
  font-size: 16px;
}
</style>