import { createApp } from "vue";
import App from "./App.vue";
import { createVueMatomo } from "vue3-matomo";

createApp(App)
  .use(
    createVueMatomo({
      host: "example.com",
      siteId: 1,
    }),
  )
  .mount("#app");
