<template>
  <div>
    <el-row class="copyright">
      <span v-text="'©' + since"></span>
      <span v-text="author"></span>
    </el-row>

    <el-row class="beian">
      <el-link
        class="gxb"
        target="_blank"
        :href="beiAn.gxbUrl"
        v-text="beiAn.gxbNo"
      ></el-link>

      <el-image
        title="备案"
        :src="require('@/assets/beian.png')"
      ></el-image>

      <el-link
        class="gab"
        target="_blank"
        :href="beiAn.gabUrl"
        v-text="beiAn.gabNo"
      ></el-link>
    </el-row>
  </div>
</template>

<script>
import { loadConfig } from '@/store/localstore';

export default {
  name: 'BeiAnInfo',
  data() {
    return {
      author: 'Aulang',
      since: '2018',
      beiAn: {
        gxbNo: '鄂ICP备18028762号',
        gxbUrl: 'http://beian.miit.gov.cn',
        gabNo: '鄂公网安备42011102003833号',
        gabUrl: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102003833'
      }
    }
  },
  created() {
    let config = loadConfig();
    if (!config) {
      return;
    }
    this.since = config.since;
    this.beiAn = config.beiAn;
  }
}
</script>

<style scoped>
.copyright {
  margin-top: 2rem;
}
.copyright span {
  margin-right: 3px;
}

.beian {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gxb {
  text-align: end;
  margin-right: 5px;
}

.gab {
  text-align: start;
  margin-left: 5px;
}
</style>