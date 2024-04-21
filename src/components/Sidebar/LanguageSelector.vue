<template>
  <div class="d-flex justify-content-end gap-2 flags p-2">
    <span @click="setLocale('pt_BR')">🇧🇷</span>
    <span @click="setLocale('en')">🇺🇸</span>
    <span @click="setLocale('es')">🇪🇸</span>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  methods: {
    setLocale(locale) {
      this.$emit('set-locale', locale)
    }
  }
}

</script>

<style>
@font-face {
  font-family: NotoColorEmojiLimited;
  unicode-range: U+1F1E6-1F1FF;
  src: url(https://raw.githack.com/googlefonts/noto-emoji/main/fonts/NotoColorEmoji.ttf);
}

.flags {
  font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
}

.flags span {
  cursor: pointer;
}

.flags span:hover {
  transform: scale(1.1);
}
</style>