import { Provider } from 'react-redux'
import { AppProps } from 'next/app'

import store from '@/store'
import '@/styles/globals.css'
import 'normalize.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
