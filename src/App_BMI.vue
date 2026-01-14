<script setup>
import { ref } from "vue";
let tall = ref("");
let weight = ref("");
let BMInum = ref(0);
let BMI = ref(0);
let calculated = ref(false); // 為了按鈕點擊才呈現結果, 新增是否已計算過 BMI 的布林值

let clearContent = function () {
  tall.value = "";
  weight.value = "";
  BMInum.value = 0;
  calculated.value = false; // 清除時將標記重置為 false
};

let calculateBMI = function () {
  const height = parseFloat(tall.value);
  const mass = parseFloat(weight.value);

  BMI.value = mass / ((height / 100) * (height / 100));
  // toFixed(2)可以鎖定數值只保留小數點後兩位
  BMInum.value = BMI.value.toFixed(2);

  calculated.value = true; // 設置標記為 true，表示已計算過 BMI
  // console.log(BMI.value);
  // console.log(BMInum.value);
};
</script>

<template>
  <nav>基本導覽列</nav>
  <main>
    <h1>BMI計算機</h1>
    <p>身高：</p>
    <!-- v-model是input裡面的雙向綁定, 有點像onChange={e => setName(e.target.value)} 可變內文 -->
    <input type="text" v-model="tall" />
    <p>體重：</p>
    <input type="text" v-model="weight" />
    <div>使用者身高是{{ tall }}</div>
    <div>使用者身高是{{ weight }}</div>

    <button @click="calculateBMI">計算BMI值</button>
    <button @click="clearContent">清除結果</button>

    <!-- <div v-if=" tall !== '' && weight !=='' "> 想要輸入就直接帶出結果的話-->
    <div v-if="calculated">
      <div v-if="BMInum < 18.5">體重過輕</div>
      <div v-else-if="BMInum >= 18.5 && BMInum < 24">體重正常</div>
      <div v-else-if="BMInum >= 24 && BMInum < 27">體重過重</div>
      <div v-else-if="BMInum >= 27 && BMInum < 30">輕度肥胖</div>
      <div v-else-if="BMInum >= 30 && BMInum < 35">中度肥胖</div>
      <div v-else>重度肥胖</div>
    </div>
  </main>
</template>

<style scoped></style>
