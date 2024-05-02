<script setup>
import NavComp from "./Nav.vue"
import MainComp from "./Main.vue"
import { ref } from "vue";
let text = ref("Test");
let change = function(){
  text.value = "修改文字後";
};
let subtitle = ref ("網站副標");
let updateSubtitle = function (){
  subtitle.value = "New副標"
};
</script>

<template>
  <!-- title為變數的代稱, "任意的標題" 為變數的值 -->
  <!-- :subtitle原本是 v-vind:subtitle 可以綁定原本事件&完成連動 -->
  <NavComp 
  title="任意的標題"
  :subtitle="subtitle"
  ></NavComp>
  <!-- backgroundColor為變數的代稱, "blue" 為css變數的值 -->
  <MainComp 
  backgroundColor="grey" 
  color="white" 
  @myevent="change"
  @update="updateSubtitle"
  ></MainComp>
  <!-- @myevent是自定義的事件名稱, 傳給MainComp組件中的button, 
    雖變數也叫change, 但使用的為App.vue這個頁面中的change定義好的功能 -->
  <div>{{ text }}</div>
</template>

<style scoped></style>