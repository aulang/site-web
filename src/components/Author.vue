<template>
  <el-card class="author">
    <el-row>
      <img
        title="Avatar"
        class="radius avatarImg"
        :src="avatarImgUrl"
      >
    </el-row>

    <el-row class="margin-row">
      <span>Aulang</span>
    </el-row>

    <el-row class="margin-row">
      <el-link
        type="success"
        target="_blank"
        href="mailto:aulang@qq.com"
      >
        <i class="far fa-envelope fa-lg"></i>
      </el-link>

      <el-link
        type="success"
        target="_blank"
        href="https://aulang.cn"
      >
        <i class="fab fa-internet-explorer fa-lg"></i>
      </el-link>

      <el-link
        type="success"
        target="_blank"
        href="https://github.com/aulang"
      >
        <i class="fab fa-github fa-lg"></i>
      </el-link>

      <el-link
        type="success"
        @mouseover.native="showQrCode"
        @mouseleave.native="hideQrCode"
      >
        <i class="fab fa-weixin fa-lg"></i>
      </el-link>
    </el-row>

    <el-row class="margin-row">
      <div class="radius">
        <span
          class="hitokoto"
          v-text="hitokoto"
        ></span>
      </div>
    </el-row>
  </el-card>
</template>


<script>
import { getHitokoto } from '@/api/hitokoto'

export default {
  name: 'Author',
  data() {
    return {
      avatarImgUrl: require('@/assets/avatar.png'),
      hitokoto: '桃李春风一杯酒，江湖夜雨十年灯'
    }
  },
  methods: {
    showQrCode() {
      this.avatarImgUrl = require('@/assets/wechat.png');
    },
    hideQrCode() {
      this.avatarImgUrl = require('@/assets/avatar.png');
    }
  },
  mounted() {
    getHitokoto().then(data => {
      this.hitokoto = data.hitokoto
    })
  }
}
</script>

<style scoped>
.author {
  padding: 0px;
  text-align: center;
}

.author .el-link {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1rem;
}

.margin-row {
  margin-top: 1rem;
}

.radius {
  border: 1px solid #d7dae2;
  border-radius: 4px;
}

.avatarImg {
  width: 80%;
}

.hitokoto {
  white-space: normal;
  word-break: break-word;
  word-wrap: break-word;
}
</style>