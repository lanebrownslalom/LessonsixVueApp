import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import {
  VApp,
  VAvatar,
  VBtn,
  VCard,
  VCardSubtitle,
  VCardText,
  VCardTitle,
  VCol,
  VContainer,
  VBadge,
  VIcon,
  VMain,
  VRow,
} from 'vuetify/components'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components: {
    VApp,
    VAvatar,
    VBadge,
    VBtn,
    VCard,
    VCardSubtitle,
    VCardText,
    VCardTitle,
    VCol,
    VContainer,
    VIcon,
    VMain,
    VRow,
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#f5f1eb',
          surface: '#fffefa',
          'on-surface': '#282722',
          'on-surface-variant': '#77746d',
          primary: '#a4533d',
          'surface-variant': '#e8e3da',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#20221f',
          surface: '#2a2c28',
          'on-surface': '#f1eee6',
          'on-surface-variant': '#b6b4aa',
          primary: '#e4a18b',
          'surface-variant': '#41433d',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
