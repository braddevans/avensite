<template>
  <div class="locale-switcher">
    <v-select label="Language"
              :items="items"
              item-text="lang"
              item-value="locale"
              persistent-hint
              single-line
              :hint="`Lang: ${select.lang}, Origin: ${select.origin}, Locale: ${select.locale}.json`"
              v-model="$i18n.locale">
    </v-select>
  </div>
</template>

<script>
export default {
  data: () => ({
    select: {lang: 'English', locale: 'en', origin: "Global"},
    items: [
      {lang: 'English', locale: 'en', origin: "Global"},
      {lang: 'Czech', locale: 'cs', origin: "Czechia"}
    ]
  }),
  methods: {
    changedLocale(event) {
      this.select = event
      this.$i18n.locale = event
    }
  }
}
</script>