<template>
  <v-card>
    <v-app-bar
        absolute
        dark
    >
      <v-img src="../../public/logo.png" width="50px" height="50px"></v-img>
      <v-tabs align-with-title>
        <v-tab href="/">{{ $t("nav.home") }}</v-tab>
        <v-tab href="/mywork">{{ $t("nav.myWork") }}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <LocaleSwitcher/>
    </v-app-bar>
  </v-card>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher";

export default {
  name: "NavBar",

  components: {
    LocaleSwitcher
  },

  data: () => ({
  })
};
</script>