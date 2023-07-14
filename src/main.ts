import "./style/index.less";
import App from "./App.vue";
import { router } from "./router/index";
import { createApp } from "vue";

const app = createApp(App);

app.use(router);
app.mount("#app");
