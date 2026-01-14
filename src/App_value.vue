<script setup>
import { ref } from "vue";
// 透過ref & .value可變響應式狀態, 無框架的js要利用該變數通常是state.value.title在<template>裡
// 這邊加了ref之後變雙向綁定變簡略, 寫在<template>變{{ state.title }}
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
