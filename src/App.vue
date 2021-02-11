<template>
  <v-app dark>
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <appFooter/>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import appFooter from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    appFooter
  },

  data: () => ({
    //
  })
};
</script>

