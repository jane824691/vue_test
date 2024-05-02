<!-- Vue專屬js寫法+setup -->
<script setup>
// console.log(`name`);
// var name = `Jonh`;
// console.log(name);

// js的變數也可放在v-html裡面
let htmlData = "<div>Hello</div>";

let info01 = "Intro of bible 01";
let info02 = "Intro of bible 02";

let info03 = "Intro of bible 03";

// 也可放布林值
let data = true;
let number = 15;

let message = `<u>Have a nice day!</u>`;
let name = "content";

// for迴圈寫法是v-for="變數in陣列"
let apiData = [1, 2, 3];

// for迴圈-陣列索引:寫法是v-for="(變數,變數)in陣列"
let anotherData = ["A", "B", "C"];

// for迴圈-物件: 寫法是v-for="(變數,變數)in物件"
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

  <div v-bind:class="info01">Hi</div>
  <div :class="info02">Hi</div>

  <div>{{ info03.toUpperCase() }}</div>

  <div :class="data ? 'Red' : 'light'">Hello</div>
  <div>{{ message }}</div>
  <div v-html="message"></div>
  <div v-bind:class="name">操作標籤的屬性</div>

  <div v-if="data">顯示</div>
  <div v-if="!data">不顯示</div>
  <div v-if="number > 20">大於20</div>
  <div v-else-if="number > 10">大於10</div>
  <div v-else>小於等於10</div>

  <div v-for="n in apiData">{{ n }}月</div>
  <div v-for="(text, index) in anotherData">
    第{{ index }}筆 - {{ text }}數據
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
