<template>
  <layout>
    <el-card class="box-card">
      <div
        slot="header"
        class="title"
      >
        <span
          style="font-size: 18px;"
          v-text="title"
        >
        </span>
      </div>

      <div
        class="article"
        v-html="html"
      >
      </div>
    </el-card>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue'
import { getArticleById } from '@/api/article';

export default {
  components: { Layout },
  name: 'Article',
  props: ['id'],
  data() {
    return {
      title: '',
      html: '',
      comments: []
    }
  },
  methods: {
    fetchData(id) {
      id = id || this.id;

      getArticleById(id).then(response => {
        this.title = response.data.title;
        this.html = response.data.content;
        this.comments = response.data.comments;
      });
    }
  },
  created() {
    this.fetchData(this.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(1, 20, to.params.id);
    next();
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