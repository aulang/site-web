<template>
  <layout>
    <el-card
      class="box-card"
      shadow="never"
      v-for="article in records"
      :key="article.id"
    >
      <div
        slot="header"
        class="title"
      >
        <div
          style="font-size: 18px;"
          v-text="article.title"
        ></div>
        <div style="font-size: 14px; margin-top: 0.5rem;">
          <span
            v-text="article.subTitle"
            style="margin-right: 1rem;"
          ></span>
          <span v-text="article.creationDate"></span>
        </div>
      </div>
      <div>
        <div
          class="article"
          v-html="article.summary"
        >
        </div>
        <div>
          <router-link
            class="el-link el-link--primary is-underline"
            :to="'article/' + article.id"
          >阅读全文</router-link>
        </div>
      </div>
    </el-card>
    <div class="pager">
      <el-pagination
        :total="total"
        :page-size="size"
        :page-count="pages"
        :current-page="current"
        :hide-on-single-page="hideOnSinglePage"
        @prev-click="fetchData(current - 1, 20)"
        @next-click="fetchData(current + 1, 20)"
        @current-change="currentChange"
        background
        layout="prev, pager, next"
      >
      </el-pagination>
    </div>
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
      size: 0,
      pages: 0,
      total: 0,
      current: 1,
      records: [],
      hideOnSinglePage: true
    }
  },
  methods: {
    fetchData(page, size) {
      page = page || 1;
      size = size || 20;

      getArticlesByPage(page, size, this.category).then(response => {
        this.size = response.data.size;
        this.pages = response.data.pages;
        this.total = response.data.total;
        this.current = response.data.current;
        this.records = response.data.records;
      });
    },
    currentChange(val) {
      this.fetchData(val, 20)
    }
  },
  created() {
    this.fetchData(1, 20);
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
.pager {
  margin-top: 1rem;
}
</style>