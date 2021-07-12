<template>
  <layout>
    <div>Article: {{id}}</div>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue'
export default {
  components: { Layout },
  name: 'Article',
  props: ['id']
}
</script>

<style scoped>
</style>