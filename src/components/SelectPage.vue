<template>
  <div class="select-container" style="width: 100%; position: relative">
    <el-select popper-class="pagination-pop" v-bind="{ ...$props, ...$attrs }">
      <slot></slot>
      <el-pagination
        small
        layout="prev, pager, next"
        :hide-on-single-page="true"
        v-bind="{ ...$props, ...$attrs }"
      ></el-pagination>
    </el-select>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.el-select {
  width: 100%;
}

.pagination-pop {
  padding: 10px 15px !important;
}
</style>
