<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const isDark = ref(false)
const theme = useTheme()

const links = [
  { label: 'Portfolio', href: 'https://example.com/portfolio', icon: 'mdi-briefcase-outline' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'mdi-linkedin' },
  { label: 'Email', href: 'mailto:lane@example.com', icon: 'mdi-email-outline' },
  { label: 'Substack', href: 'https://substack.com/', icon: 'mdi-text-box-outline' },
]

function toggleTheme() {
  isDark.value = !isDark.value
  theme.change(isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <v-main class="link-page" :class="{ 'link-page--dark': isDark }">
    <v-container class="d-flex align-center justify-center pa-4 pa-sm-10" fluid>
      <v-card
        class="link-card"
        color="surface"
        elevation="8"
        max-width="480"
        rounded="xl"
        width="100%"
        aria-labelledby="profile-name"
      >
        <v-card-text class="pa-6 pa-sm-10">
          <v-row align="center" justify="space-between" no-gutters>
            <v-col cols="auto">
              <span class="eyebrow">A FEW GOOD PLACES TO START</span>
            </v-col>
            <v-col cols="auto">
              <v-btn
                icon
                rounded="circle"
                size="40"
                variant="outlined"
                :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                :aria-pressed="isDark"
                @click="toggleTheme"
              >
                <v-icon :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'" />
              </v-btn>
            </v-col>
          </v-row>

          <div class="text-center py-8">
            <v-badge
              bordered
              class="mb-5"
              color="primary"
              icon="mdi-creation"
              location="bottom end"
              offset-x="4"
              offset-y="4"
            >
              <v-avatar
                class="avatar-placeholder"
                size="100"
                role="img"
                aria-label="Profile photo placeholder"
              >
                LB
              </v-avatar>
            </v-badge>

            <v-card-title id="profile-name" tag="h1" class="profile-title text-h4 px-0 py-0">
              Lane Brown
            </v-card-title>
            <v-card-subtitle class="tagline text-center mx-auto mt-3">
              Writer and strategist wrangling life's adventures to tell stories and build connections.
            </v-card-subtitle>
          </div>

          <nav class="d-flex flex-column ga-3" aria-label="Lane Brown's links">
            <v-btn
              v-for="link in links"
              :key="link.label"
              class="link-button text-none"
              :href="link.href"
              :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
              :rel="link.href.startsWith('mailto:') ? undefined : 'noreferrer'"
              :prepend-icon="link.icon"
              append-icon="mdi-arrow-top-right"
              block
              height="56"
              rounded="lg"
              variant="outlined"
            >
              {{ link.label }}
            </v-btn>
          </nav>

          <p class="card-footer text-center mt-6">
            Thanks for stopping by
            <v-icon color="primary" icon="mdi-creation" size="small" aria-hidden="true" />
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<style scoped>
.link-page {
  --page-glow-one: rgb(221 200 175 / 28%);
  --page-glow-two: rgb(201 213 196 / 26%);

  min-height: 100vh;
  min-height: 100svh;
  background-image:
    radial-gradient(ellipse at 12% 10%, var(--page-glow-one), transparent 35%),
    radial-gradient(ellipse at 90% 90%, var(--page-glow-two), transparent 34%);
  background-color: rgb(var(--v-theme-background));
  transition: background-color 250ms ease;
}

.link-page--dark {
  --page-glow-one: rgb(164 83 61 / 12%);
  --page-glow-two: rgb(201 213 196 / 8%);
}

.eyebrow {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.63rem;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.avatar-placeholder {
  border: 5px solid rgb(var(--v-theme-surface));
  color: #704f3f;
  background:
    radial-gradient(circle at 30% 25%, rgb(255 255 255 / 75%), transparent 37%),
    linear-gradient(145deg, #e7cbb5, #c5c9b7);
  box-shadow: 0 0 0 1px rgb(var(--v-theme-surface-variant));
  font-family: Georgia, serif;
  font-size: 1.6rem;
  letter-spacing: -0.08em;
}

.profile-title {
  color: rgb(var(--v-theme-on-surface));
  font-family: 'Google Sans', sans-serif;
  font-weight: 600;
  letter-spacing: -0.055em;
}

.tagline {
  max-width: 21rem;
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.94rem;
  line-height: 1.65;
  opacity: 1;
  white-space: normal;
}

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

.card-footer {
  color: rgb(var(--v-theme-on-surface-variant));
  font-size: 0.75rem;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
