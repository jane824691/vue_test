<script setup>
import { ref } from "vue";
// 透過ref & .value可變響應式狀態
let state = ref({ 
    title: "網站標題", 
    className: "title" 
    });
let handler = function () {
  console.log("點擊");
  state.value.title = "新Title";
  state.value.className = "title hightlight";
};
</script>

<template>
  <nav>基本導覽列</nav>
  <main :class="state.className">{{ state.title }}</main>
  <button @click="handler">按鈕</button>
</template>

<style scoped>
main {
  background-color: antiquewhite;
}
.title{
    font-weight: bold;
}
.hightlight{
    color: yellowgreen;
}
</style>
