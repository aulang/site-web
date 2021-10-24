<template>
  <el-row
    class="header"
    type="flex"
    :gutter="18"
  >
    <el-col
      :span="19"
      class="menus"
    >
      <el-link
        type="success"
        href="/"
      >Aulang</el-link>
      <el-link
        type="success"
        v-for="menu in menus"
        :key="menu.title"
        :href="menu.url"
        :target="menu.target"
        :title="menu.desc"
        v-text="menu.title"
      >
      </el-link>
    </el-col>

    <el-col :span="5">
      <el-input
        type="text"
        placeholder="输入关键字搜索"
        v-model="keyword"
        @keyup.enter.native="search"
      >
        <el-button
          slot="append"
          icon="el-icon-s-promotion"
          @click="search"
        ></el-button>
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
import { loadConfig } from '@/store/localstore';
export default {
  name: 'WlHeader',
  data() {
    return {
      menus: [],
      keyword: ''
    }
  },
  methods: {
    search() {
      if (this.keyword) {
        window.open(`https://www.baidu.com/s?wd=${this.keyword}`);
      }
    }
  },
  created() {
    let config = loadConfig();
    if (!config) {
      return;
    }

    this.menus = config.menus.map(e => {
      if (e.url.startsWith('http')) {
        e.target = '_blank';
      } else {
        e.target = '_self'
      }

      return e;
    });
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.menus {
  text-align: start;
}

.menus .el-link {
  margin-right: 1rem;
  font-size: 18px;
  vertical-align: baseline;
}
</style>