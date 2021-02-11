<template>
  <v-card height="400px">
    <v-footer v-bind="localAttrs" :padless="padless">
      <v-card flat tile width="100%" class="dark lighten-1 text-center">
        <v-card-text>
          <v-btn
              class="ma-2"
              depressed
          >
            <v-icon size="24px">
              mdi-email
            </v-icon>
            {{ $t("footer.email")}}
          </v-btn>
          <v-btn
              class="ma-2"
              depressed
          >
            <v-icon size="24px">
              mdi-facebook
            </v-icon>
            {{ $t("footer.facebook")}}
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          2021 to {{ new Date().getFullYear() }} — <strong>Bradd Evans</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>

export default {
  name: "NavBar",

  data: () => ({
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: false,
    variant: 'default',
  }),
  computed: {
    localAttrs() {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
};
</script>