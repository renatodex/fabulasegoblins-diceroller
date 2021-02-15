import Head from 'next/head'
import { withTranslation } from 'i18n'
import styles from './roll.module.scss'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import RollCard from 'components/roll_card/roll_card'

const RollInfo = ({ t }) => {
  const rolls = [
    {
      token: 'dh928gf89fsdgt32kashsf7832gkfashdhf8274gf87s6f9hd',
      total_faces: '20',
      modifier: '+3',
      created_at: '20',
      result: '21',
      natural_success: true,
      natural_failure: false
    }
  ]

  return (
    <div className='container'>
      <Header subtitle={t('rollinfo.subtitle')}/>

      <main className={styles.main}>
        <div className='grid'>
          {rolls.map(roll => <RollCard key={roll.token} roll={roll} />)}
        </div>
      </main>

      <Footer />
    </div>
  )
}

RollInfo.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(RollInfo)
