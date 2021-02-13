import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./i18n";
import Home from "@/views/Home";
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(VueRouter);


// set default config
Vue.$cookies.config('7d')

// set global cookie
if (!Vue.$cookies.isKey('locale')){
    Vue.$cookies.set('locale','cs');
}

Vue.mixin({
  data: function() {
    return {
      globallocale:'cs'
    }
  }
})



Vue.config.productionTip = false;

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
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
