<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
  image?: string
}>()
</script>

<template>
  <v-btn
    class="social-link-button"
    :href="url"
    :aria-label="label"
    rel="noreferrer"
    target="_blank"
    color="primary"
    size="44"
    variant="flat"
    icon
  >
    <span
      v-if="image"
      class="social-link-image"
      :style="{ maskImage: `url(${image})` }"
      aria-hidden="true"
    />
    <v-icon v-else :icon="icon" aria-hidden="true" />
  </v-btn>
</template>

<style scoped>
.social-link-button {
  overflow: hidden;
  transition:
    transform 200ms ease,
    box-shadow 200ms ease;
}

.social-link-image {
  width: 35px;
  height: 35px;
  background-color: rgb(var(--v-theme-on-primary));
  mask-mode: luminance;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
}

.social-link-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgb(53 43 29 / 12%);
}
</style>
