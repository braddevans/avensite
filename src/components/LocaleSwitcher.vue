<template>
  <div class="locale-switcher">
    <select v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="cs">Czech</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>