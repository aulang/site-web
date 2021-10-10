<template>
  <layout>
    <el-card
      class="box-card"
      shadow="never"
      v-for="article in articles"
      :key="article.id"
    >
      <div
        slot="header"
        class="title"
      >
        <span v-text="article.title"></span>
      </div>
      <div
        class="article"
        v-html="article.summary"
      >
      </div>
    </el-card>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue'
import { getArticlesByPage } from '@/api/article';

export default {
  components: { Layout },
  name: 'Page',
  props: ['category'],
  data() {
    return {
      articles: []
    }
  },
  methods: {
    fetchData() {
      getArticlesByPage(1, 20, this.category).then(response => {
        this.articles = response.data.records;
      });
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: left;
}
.article {
  width: 100%;
  text-align: left;
}
</style>