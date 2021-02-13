<template>
  <div class="locale-switcher">
    <v-select label="Language"
              :items="items"
              item-text="lang"
              item-value="locale"
              persistent-hint
              return-object
              single-line
              v-on:click="changedLocale"
              :hint="`Lang: ${select.lang}, Locale: ${select.locale}.json`"
              v-model="select">
    </v-select>
  </div>
</template>

<script>
import i18n from "@/i18n";

export default {
  data: () => ({
    select: {locale: 'cs', lang: 'Czech'},
    items: [
      {locale: 'en', lang: 'English'},
      {locale: 'cs', lang: 'Czech'}
    ]
  }),
  methods: {
    changedLocale() {
      i18n.locale = this.select.locale;
      this.globallocale = this.select.locale;
    },
  },
}
</script>