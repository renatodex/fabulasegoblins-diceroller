import PropTypes from 'prop-types'
import Head from 'next/head'
import { withTranslation } from 'i18n'
import styles from './index.module.scss'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import RollCard from 'components/roll_card/roll_card'

const Home = ({ t }) => {
  const rolls = [
    {
      token: 'dh928gf89fsdgt32kashsf7832gkfashdhf8274gf87s6f9hd',
      total_faces: '20',
      modifier: '+3',
      created_at: '20',
      result: '21',
      natural_success: true,
      natural_failure: false
    },
    {
      token: 'dh928gf89fsdgt32kashsf7832gkfashdhf8274gf87s6f9hd',
      total_faces: '20',
      modifier: '+3',
      created_at: '20',
      result: '21',
      natural_success: false,
      natural_failure: false
    },
    {
      token: 'dh928gf89fsdgt32kashsf7832gkfashdhf8274gf87s6f9hd',
      total_faces: '20',
      modifier: '+3',
      created_at: '20',
      result: '21',
      natural_success: false,
      natural_failure: true
    }
  ]

  return (
    <div className='container'>
      <Header />

      <main className={styles.main}>
        <div className={styles.grid}>
          {rolls.map((roll) => (
            <div key={roll.token}><RollCard roll={roll} /></div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Home.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Home)
