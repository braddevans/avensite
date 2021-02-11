import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import Home from "@/views/Home";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import("./views/About.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
