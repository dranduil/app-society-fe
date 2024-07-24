import { useState } from 'react'
import { Authentication } from '@/interfaces/authentication'
import Navigation from '@/components/navigation'

function App() {
  const auth = useState<Authentication>({
    token: '',
    refreshToken: ''
  })
  if((auth))
    return (
      <Navigation></Navigation>
    )
}

export default App
