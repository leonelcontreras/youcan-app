import i18n from 'i18next'
import * as localization from 'expo-localization'
import { initReactI18next } from 'react-i18next'
import * as en from '../../assets/locales/en.json'

const LocaleProvider = () => {
  return i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: en
        }
      },
      fallbackLng: 'en',
      lng: localization.locale
    })
}

export default LocaleProvider
