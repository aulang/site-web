<template>
  <el-card class="box-card">
    <div slot="header">
      <span>文字分类</span>
    </div>
    <el-row
      class="box-row"
      v-for="category in categories"
      :key="category.id"
    >
      <el-link
        type="success"
        target="_self"
        :href="category.name"
        :title="category.count"
        v-text="category.name"
      >
      </el-link>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      categories: [
        { "id": "5eb4173a9c65ccb5d3745382", "name": "技术博客", "count": 0, "order": 1, "creationDate": "2020-05-04T01:12:11.735Z" },
        { "id": "5eb4173a9c65ccb5d3745383", "name": "散文随笔", "count": 1, "order": 2, "creationDate": "2020-05-04T01:12:11.735Z" },
        { "id": "5eb4173a9c65ccb5d3745384", "name": "日常杂记", "count": 0, "order": 3, "creationDate": "2020-05-04T01:12:11.735Z" },
        { "id": "5eb4173a9c65ccb5d3745385", "name": "长篇连载", "count": 0, "order": 4, "creationDate": "2020-05-04T01:12:11.735Z" }
      ]
    }
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