<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

const links = [
  { label: 'Portfolio', href: 'https://example.com/portfolio', icon: 'portfolio' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:lane@example.com', icon: 'email' },
  { label: 'Substack', href: 'https://substack.com/', icon: 'substack' },
]
</script>

<template>
  <main class="link-page" :data-theme="isDark ? 'dark' : 'light'">
    <section class="link-card" aria-labelledby="profile-name">
      <div class="card-top">
        <span class="eyebrow">A FEW GOOD PLACES TO START</span>
        <button
          class="theme-toggle"
          type="button"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :aria-pressed="isDark"
          @click="isDark = !isDark"
        >
          <svg v-if="isDark" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
          </svg>
        </button>
      </div>

      <div class="profile">
        <div class="avatar-placeholder" role="img" aria-label="Profile photo placeholder">
          <span>LB</span>
          <span class="avatar-sparkle" aria-hidden="true">✳</span>
        </div>

        <h1 id="profile-name">Lane Brown</h1>
        <p class="tagline">
          Writer and strategist wrangling life's adventures to tell stories and build connections.
        </p>
      </div>

      <nav class="link-list" aria-label="Lane Brown's links">
        <a
          v-for="link in links"
          :key="link.label"
          class="link-button"
          :href="link.href"
          :target="link.href.startsWith('mailto:') ? undefined : '_blank'"
          :rel="link.href.startsWith('mailto:') ? undefined : 'noreferrer'"
        >
          <span class="link-icon" aria-hidden="true">
            <svg v-if="link.icon === 'portfolio'" viewBox="0 0 24 24">
              <rect x="3.5" y="6.5" width="17" height="13" rx="2" />
              <path d="M8.5 6.5v-2h7v2M3.5 11.5h17m-10 0v2h3v-2" />
            </svg>
            <svg v-else-if="link.icon === 'linkedin'" viewBox="0 0 24 24">
              <path d="M6 9v9M6 6.5v.01M10 18v-9m0 4a4 4 0 0 1 8 0v5" />
            </svg>
            <svg v-else-if="link.icon === 'email'" viewBox="0 0 24 24">
              <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
              <path d="m4.5 7 7.5 6 7.5-6" />
            </svg>
            <svg v-else viewBox="0 0 24 24">
              <path d="M6 3.5h8l4 4v13H6z" />
              <path d="M14 3.5v5h4M9 12h6m-6 3h6" />
            </svg>
          </span>
          <span>{{ link.label }}</span>
          <svg class="link-arrow" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
        </a>
      </nav>

      <p class="card-footer">Thanks for stopping by <span aria-hidden="true">✳</span></p>
    </section>
  </main>
</template>

<style scoped>
.link-page {
  --page: #f5f1eb;
  --card: #fffefa;
  --ink: #282722;
  --muted: #77746d;
  --line: #e8e3da;
  --accent: #a4533d;
  --button: #fffefa;
  --button-hover: #f8eee8;
  --shadow: 0 24px 80px rgb(53 43 29 / 10%);

  display: grid;
  min-height: 100vh;
  min-height: 100svh;
  place-items: center;
  padding: clamp(1rem, 5vw, 2.5rem);
  color: var(--ink);
  background:
    radial-gradient(ellipse at 12% 10%, rgb(221 200 175 / 28%), transparent 35%),
    radial-gradient(ellipse at 90% 90%, rgb(201 213 196 / 26%), transparent 34%), var(--page);
  transition:
    color 250ms ease,
    background-color 250ms ease;
}

.link-page[data-theme='dark'] {
  --page: #20221f;
  --card: #2a2c28;
  --ink: #f1eee6;
  --muted: #b6b4aa;
  --line: #41433d;
  --accent: #e4a18b;
  --button: #30322d;
  --button-hover: #393a34;
  --shadow: 0 24px 80px rgb(0 0 0 / 28%);
}

.link-card {
  width: min(100%, 480px);
  padding: clamp(1.5rem, 6vw, 2.5rem);
  border: 1px solid color-mix(in srgb, var(--line), transparent 30%);
  border-radius: 1.25rem;
  background: var(--card);
  box-shadow: var(--shadow);
  transition:
    background-color 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.eyebrow {
  color: var(--muted);
  font-size: 0.63rem;
  font-weight: 600;
  letter-spacing: 0.15em;
}

.theme-toggle {
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: var(--ink);
  background: transparent;
  cursor: pointer;
  transition:
    transform 200ms ease,
    background-color 200ms ease,
    border-color 200ms ease;
}

.theme-toggle:hover {
  transform: rotate(-10deg);
  background: var(--button-hover);
}

.theme-toggle svg {
  width: 1.1rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.profile {
  padding: 1.9rem 0 1.75rem;
  text-align: center;
}

.avatar-placeholder {
  position: relative;
  display: grid;
  width: 6.25rem;
  aspect-ratio: 1;
  place-items: center;
  margin: 0 auto 1.2rem;
  border: 5px solid var(--card);
  border-radius: 50%;
  color: #704f3f;
  background:
    radial-gradient(circle at 30% 25%, rgb(255 255 255 / 75%), transparent 37%),
    linear-gradient(145deg, #e7cbb5, #c5c9b7);
  box-shadow: 0 0 0 1px var(--line);
}

.avatar-placeholder > span:first-child {
  font-family: Georgia, serif;
  font-size: 1.6rem;
  letter-spacing: -0.08em;
}

.avatar-sparkle {
  position: absolute;
  right: -0.1rem;
  bottom: 0.1rem;
  display: grid;
  width: 1.7rem;
  aspect-ratio: 1;
  place-items: center;
  border: 3px solid var(--card);
  border-radius: 50%;
  color: var(--card);
  background: var(--accent);
  font-size: 0.65rem;
}

h1 {
  margin: 0;
  font-family: 'Google Sans', sans-serif;
  font-size: clamp(2rem, 8vw, 2.55rem);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 1.12;
}

.tagline {
  max-width: 21rem;
  margin: 0.8rem auto 0;
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.65;
}

.link-list {
  display: grid;
  gap: 0.7rem;
}

.link-button {
  display: flex;
  min-height: 3.55rem;
  align-items: center;
  gap: 0.9rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--line);
  border-radius: 0.7rem;
  color: var(--ink);
  background: var(--button);
  font-size: 0.93rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    transform 200ms ease,
    border-color 200ms ease,
    box-shadow 200ms ease,
    background-color 200ms ease;
}

.link-button:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent), var(--line) 55%);
  background: var(--button-hover);
  box-shadow: 0 8px 18px rgb(53 43 29 / 8%);
}

.link-button:focus-visible,
.theme-toggle:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--accent), transparent 45%);
  outline-offset: 3px;
}

.link-icon {
  display: grid;
  width: 1.65rem;
  aspect-ratio: 1;
  place-items: center;
  color: var(--accent);
}

.link-icon svg,
.link-arrow {
  width: 1.2rem;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.link-arrow {
  width: 1rem;
  margin-left: auto;
  color: var(--muted);
  transition:
    transform 200ms ease,
    color 200ms ease;
}

.link-button:hover .link-arrow {
  transform: translate(2px, -2px);
  color: var(--accent);
}

.card-footer {
  margin: 1.5rem 0 0;
  color: var(--muted);
  font-size: 0.75rem;
  text-align: center;
}

.card-footer span {
  padding-left: 0.15rem;
  color: var(--accent);
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
