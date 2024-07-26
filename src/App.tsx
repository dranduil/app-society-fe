import { useState } from 'react'
import { Authentication } from '@/interfaces/authentication'
import Navigation from '@/components/navigation'
import { Provider } from 'react-redux'
import { store }  from '@/store/index'

function App() {
  const auth = useState<Authentication>({
    token: '',
    refreshToken: ''
  })
  if((auth))
    return (
      <Provider store={store}>
        <Navigation></Navigation>
      </Provider>
    )
}

export default App
