import App from 'next/app'
import { appWithTranslation } from 'i18n'
import './_app.scss'
import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
