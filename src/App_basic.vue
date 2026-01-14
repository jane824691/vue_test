<!-- NOTE: <script setup> = 整個 .vue 檔本身 = 一個 Component 函式
沒有<script setup>時的寫法:
  <script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)

    return { count, double }
  }
}
</script>

有之後的寫法 - 可以不用 export default 跟 return：
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)
</script>
-->

<!-- Vue3專屬js寫法+setup -->
<script setup>
// console.log(`name`);
// var name = `Jonh`;
// console.log(name);

// js的變數也可放在v-html裡面
let htmlData = "<div>Hello</div>";

let info01 = "Intro of bible 01"; // 比如綁v-bind:class="info01",就是命名有個class叫info01
let info02 = "Intro of bible 02";

let info03 = "Intro of bible 03"; // 綁 <div>{{ info03.toUpperCase() }}</div> 就顯示INTRO OF BIBLE 03

// 也可放布林值
let data = true;
let number = 15;

let message = `<u>Have a nice day!</u>`;
let name = "content";

// for迴圈寫法是v-for="變數in陣列"
let apiData = [1, 2, 3];

// for迴圈-陣列索引:寫法是v-for="(變數, 變數anotherData) in 陣列"
let anotherData = ["A", "B", "C"];

// for迴圈-物件: 寫法是v-for="(變數, 變數otherData) in 物件"
let otherData = { x: 3, y: 4 };

let level = 0.5;
let topics = { html: "html", css: "css", js: "Javascript", vue: "Vue" };

let handler = function () {
  console.log("Click");
};
let clickHandler = function () {
  console.log("click Handler");
};
let mouseoverHandler = function () {
  console.log("Mouse Over");
};
</script>

<!-- HTML架構 -->
<template>
  <nav>導覽列</nav>
  <main>主內容</main>
  <div v-html="htmlData.toUpperCase()"></div>

  <!-- 根據變數動態設定 class name -->
  <!-- :class 是 v-bind:class 的縮寫 -->
  <div v-bind:class="info01">Hi</div>
  <div :class="info02">Hi</div>

  <div>{{ info03.toUpperCase() }}</div>

  <div :class="data ? 'Red' : 'light'">Hello</div>
  <!-- 顯示字串為純文字 -->
  <div>{{ message }}</div>
  <!-- 將字串內容解析為 HTML, 並插入元素內部, 須注意 XSS 風險。 -->
  <div v-html="message"></div>
  <div v-bind:class="name">操作標籤的屬性</div>

  <div v-if="data">顯示</div>
  <div v-if="!data">不顯示</div>
  <div v-if="number > 20">大於20</div>
  <div v-else-if="number > 10">大於10</div>
  <div v-else>小於等於10</div>

  <div v-for="n in apiData">{{ n }}月</div>
  <div v-for="(text, index) in anotherData">
    第{{ index + 1 }}筆 - {{ text }}數據
  </div>
  <div v-for="(value, key) in otherData">物件屬性{{ key }} - 為{{ value }}</div>
  <div v-if="level === 3">大神</div>
  <div v-else-if="level === 2">資深</div>
  <div v-else-if="level === 1">中階</div>
  <div v-else>
    入門
    <ul>
      <li v-for="(value, key) in topics">
        {{ value }} - {{ key.toUpperCase() }}
      </li>
    </ul>
  </div>
  <!--  v-on:click縮寫 = @click.-->
  <span v-on:click="handler">文字</span>
  <span @click.once="clickHandler" @mouseover="mouseoverHandler">按鈕</span>
  <a href="https://tw.voicetube.com/" @click.prevent="handler">前往Voicetube</a>
</template>

<!-- Vue專屬css寫法+scoped -->
<style scoped>
main {
  background-color: antiquewhite;
}

.content {
  color: lightblue;
}
</style>
