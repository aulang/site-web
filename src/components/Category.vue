<template>
  <el-card class="box-card">
    <div slot="header">
      <span>文章分类</span>
    </div>
    <el-row
      class="box-row"
      v-for="category in categories"
      :key="category.id"
    >
      <router-link
        class="el-link el-link--success is-underline"
        :to="'page?category=' + category.id"
      >
        <i class="fa fa-book"></i>
        <span v-text="category.name"></span>
        <el-tag
          size="mini"
          v-text="category.count"
        ></el-tag>
      </router-link>
    </el-row>
  </el-card>
</template>

<script>
import { getCategories } from '@/api/article'

export default {
  name: 'Category',
  data() {
    return {
      categories: []
    }
  },
  created() {
    getCategories().then(response => {
      if (response.code === 0) {
        this.categories = response.data;
      }
    })
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
.el-link span {
  padding: 0px 10px 0px 10px;
}
</style>