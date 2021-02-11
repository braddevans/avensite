import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import i18n from "./i18n";

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
