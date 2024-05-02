<script setup>
import { ref } from "vue";
let text = ref("主要的網站內容");
let change =function () {
  text.value = "新Content";
};
// 自定義事件方法1：
defineProps(["color", "backgroundColor"]);

// 自定義事件方法2：
let emit = defineEmits(["update"]);
let updateParentSubtitle = function(){
    emit("update");
};
</script>

<template>
    <!-- 前為屬性的名稱, 後為屬性的value -->
  <main :style="{color:color, backgroundColor:backgroundColor}">
    <div @click="change"> {{ text }}</div>
    <!-- 方法1：呼應回頂層App.vue裡的@myevent -->
    <button @click="$emit('myevent')">點擊可改變文字</button>

    <!-- 方法2： 呼應回頂層App.vue裡的@update -->
    <button @click="updateParentSubtitle">改變副標題</button>
</main>
</template>

<style scoped>
main{
  padding: 10px;
background-color: bisque;
}
</style>
