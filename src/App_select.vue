<script setup>
import { ref } from "vue";
let content = ref("");
let clearContent = function () {
  content.value = "";
};


// 多選適合陣列形式裝資料[]
let interests = ref([]);
let clearChoose = function () {
  interests.value = [];
;}
let color = ref(null);
</script>

<template>
  <nav>基本導覽列</nav>
  <main>
    <h3>多選框</h3>
    <input type="checkbox" value="rpg" v-model="interests" />角色扮演<br />
    <input type="checkbox" value="rts" v-model="interests" />即時戰略<br />
    <input type="checkbox" value="action" v-model="interests" />動作遊戲<br />
    <!-- <div>喜歡的興趣是 {{ interests }}</div> -->
    <button @click="clearChoose">清空</button>
    
    <ul>
      <li v-for="interest in interests">{{ interest }}</li>
    </ul>
    <h3>單行輸入框</h3>
    <input type="text" v-model="content" />
    <div>使用者輸入的文字是 {{ content }}</div>
    <button @click="clearContent">清空</button>

    <h3>下拉式選單</h3>
    <select v-model="color">
      <option value="">請選擇顏色</option>
      <option value="red">紅色</option>
      <option value="green">綠色</option>
    </select>
    <div :class="color">使用者選擇的是 {{ color }}</div>

    <!-- 
    <h3>單選框</h3>
    <input type="radio" value="red" v-model="color">紅色 <br/>
    <input type="radio" value="green" v-model="color">綠色
    <div :class="color">使用者選擇的顏色：{{ color }}</div>
    -->
  </main>
</template>

<style scoped>
.green {
  color: green;
}
.red {
  color: red;
}
</style>
