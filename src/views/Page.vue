<template>
  <layout>
    <div>Page: {{category}}</div>
  </layout>
</template>

<script>
import Layout from '@/components/Layout.vue'
export default {
  components: { Layout },
  name: 'Page',
  props: ['category']
}
</script>

<style scoped>
</style>