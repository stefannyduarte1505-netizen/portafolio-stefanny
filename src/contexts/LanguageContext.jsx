import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => sessionStorage.getItem('lang') || 'en')
  const toggle = () => setLang(l => {
    const next = l === 'en' ? 'es' : 'en'
    sessionStorage.setItem('lang', next)
    return next
  })
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
