<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import LinkButton from '@/components/LinkButton.vue'
import SocialLinkButton from '@/components/SocialLinkButton.vue'

const isDark = ref(false)
const theme = useTheme()

const links = [
  { label: 'Portfolio', href: 'https://example.com/portfolio', icon: 'mdi-briefcase-outline' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'mdi-linkedin' },
  { label: 'Email', href: 'mailto:lane@example.com', icon: 'mdi-email-outline' },
  { label: 'Substack', href: 'https://substack.com/', icon: 'mdi-text-box-outline' },
]

const socialLinks: { label: string; href: string; icon: string; image?: string }[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/lanebrown', icon: 'mdi-instagram' },
  { label: 'X', href: 'https://x.com/lanek', icon: 'mdi-alpha-x', image: '/x-logo.jpg' },
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
            <LinkButton
              v-for="link in links"
              :key="link.label"
              :label="link.label"
              :url="link.href"
              :icon="link.icon"
            />
          </nav>

          <p class="card-footer text-center mt-6">
            Thanks for stopping by
            <v-icon color="primary" icon="mdi-creation" size="small" aria-hidden="true" />
          </p>

          <nav class="social-links d-flex justify-center ga-4 mt-4" aria-label="Social media links">
            <SocialLinkButton
              v-for="link in socialLinks"
              :key="link.label"
              :label="link.label"
              :url="link.href"
              :icon="link.icon"
              :image="link.image"
            />
          </nav>
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
