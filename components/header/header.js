import styles from './header.module.scss'
import { withTranslation } from 'i18n'
import Head from 'next/head'
import NavBar from 'components/nav_bar/nav_bar'
import Anchor from 'components/anchor/anchor'
import { ToastContainer } from 'react-toastify'

const Header = ({ t, subtitle = t('subtitle') }) => {
  return (
    <header className={styles.main}>
      <Head>
        <title>Dice Roller</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <Anchor href='/'>
        <img src='/logo.png' width={120} />
      </Anchor>

      <ToastContainer />

      <h1 className={styles.title}>
        {t('title')}
      </h1>

      <p className={styles.description}>
        {subtitle}
      </p>
    </header>
  )
}

export default withTranslation('common')(Header)
