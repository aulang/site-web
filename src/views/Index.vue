<template>
  <layout>
    <div class="article" v-html="html">

    </div>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import { articlesPage } from '@/api/article';

export default {
  components: { Layout },
  data() {
    return {
      html: ''
    }
  },
  created() {
    articlesPage(1, 2).then(response => {
      console.log(response);

      if (response.data.content) {
        this.html = response.data.content[0].content;
      }
    });
  }
}
</script>

<style scoped>
.article {
  width: 100%;
  text-align: left;
}
</style>