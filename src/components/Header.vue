<template>
  <el-row
    class="header"
    type="flex"
    :gutter="18"
  >
    <el-col
      :span="20"
      class="links"
    >
      <el-link
        type="primary"
        v-for="link in links"
        :key="link.name"
        :href="link.url"
        v-text="link.name"
      >
      </el-link>
    </el-col>

    <el-col :span="6">
      <el-input
        type="text"
        placeholder="输入关键字搜索"
        v-model="keyword"
      >
        <el-button
          slot="append"
          icon="el-icon-s-promotion"
        ></el-button>
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'WlHeader',
  data() {
    return {
      links: [
        {
          name: 'Aulang',
          url: '/'
        },
        {
          name: '关于',
          url: '/about'
        },
        {
          name: '百度',
          url: 'https://www.baidu.com'
        }
      ],
      keyword: ''
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.links {
  text-align: start;
}

.links .el-link {
  margin-right: 1rem;
  font-size: 18px;
  vertical-align: baseline;
}
</style>