<script setup>
  // title為變數的代稱, 非變數的值
  defineProps(["title", "subtitle"]);
</script>

<template>
  <nav>
    <div>{{ title }}</div>
    <div>{{ subtitle }}</div>
  </nav>
</template>

<style scoped>
nav{
  padding: 10px;
}
</style>
