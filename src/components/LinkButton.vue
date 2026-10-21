<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    class="link-button text-none"
    :href="url"
    :target="url.startsWith('mailto:') ? undefined : '_blank'"
    :rel="url.startsWith('mailto:') ? undefined : 'noreferrer'"
    :prepend-icon="icon"
    append-icon="mdi-arrow-top-right"
    block
    height="56"
    rounded="lg"
    variant="outlined"
  >
    {{ label }}
  </v-btn>
</template>

<style scoped>
.link-button {
  border-color: rgb(var(--v-theme-surface-variant));
  color: rgb(var(--v-theme-on-surface));
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease,
    background-color 200ms ease;
}

.link-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgb(53 43 29 / 8%);
}

.link-button :deep(.v-btn__prepend .v-icon) {
  color: rgb(var(--v-theme-primary));
}
</style>
