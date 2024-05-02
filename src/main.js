// 載入createApp 函式
import { createApp } from "vue";
// 載入根組件
import App from "./App.vue";
// 建立Vue App物件
const app = createApp(App);
// 掛載到HTML標籤底下
app.mount("#app");