<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { getConfig } from '@/api/config'
import { saveConfig, loadConfig } from '@/store/localstore'

export default {
  created() {
    if(loadConfig()) {
      return
    }
    getConfig().then(response => {
      if (response.code === 0) {
        saveConfig(response.data);
      }
    });
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
