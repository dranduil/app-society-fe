import { ThemeProvider } from '@/components/theme-provider'
import { LoginForm } from './pages/login'
import { useState } from 'react'
import { Authentication } from './interfaces/authentication'

function App() {
  const auth = useState<Authentication>({
    token: '',
    refreshToken: ''
  })
  if((auth))
    return (
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <LoginForm></LoginForm>
      </ThemeProvider>
    )
}

export default App
