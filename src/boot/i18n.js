import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

const datetimeFormats = {
  'en-US': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    },
    time: {
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  fr: {
    short: {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    },
    long: {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    },
    time: {
      hour: 'numeric',
      minute: 'numeric'
    }
  }
}

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'fr',
    globalInjection: true,
    messages,
    datetimeFormats
  })

  // Set i18n instance on app
  app.use(i18n)
})
