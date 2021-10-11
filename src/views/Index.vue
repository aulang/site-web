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
          <span
            style="font-size: 18px;"
            v-text="title"
          ></span>
        </router-link>
      </div>

      <div
        class="article"
        v-html="html"
      >
      </div>
    </el-card>

    <el-pagination
      class="pager el-row is-justify-space-between el-row--flex"
      :total="total"
      :page-size="size"
      :page-count="pages"
      :current-page="current"
      :hide-on-single-page="hideOnSinglePage"
      @prev-click="fetchData(current - 1, 2)"
      @next-click="fetchData(current + 1, 2)"
      prev-text="下一页"
      next-text="上一页"
      layout="next, prev"
    >
    </el-pagination>
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
      html: '',
      size: 0,
      pages: 0,
      total: 0,
      current: 1,
      hideOnSinglePage: true
    }
  },
  created() {
    this.fetchData(1, 2);
  },
  methods: {
    fetchData(page, size) {
      page = page || 1;
      size = size || 2;

      getArticlesByPage(page, size).then(response => {
        this.size = response.data.size;
        this.pages = response.data.pages;
        this.total = response.data.total;
        this.current = response.data.current;

        if (response.data.records) {
          this.id = response.data.records[0].id;
          this.title = response.data.records[0].title;
          this.html = response.data.records[0].content;
        }
      });
    }
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
.pager {
  margin-top: 0.5rem;
  width: 100%;
}
</style>