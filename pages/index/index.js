import PropTypes from 'prop-types'
import Head from 'next/head'
import { withTranslation } from 'i18n'
import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import RollCard from 'components/roll_card/roll_card'
import axios from 'axios'

const Home = ({ t }) => {
  const host = process.env.NEXT_PUBLIC_API_HOST
  const [rolls, setRolls] = useState([])

  useEffect(() => {
    const loadRoll = async () => {
      const response = await axios.get(`${host}/api/v1/rolls?limit=20`)
      setRolls(response.data.rolls)
    }

    loadRoll()
  }, [])

  const buildRolls = () => {
    if (rolls.length === 0) {
      return <div>Loading...</div>
    } else {
      return (
        <div className={styles.grid}>
          {rolls.map((roll) => (
            <div key={roll.token}><RollCard roll={roll} /></div>
          ))}
        </div>
      )
    }
  }

  return (
    <div className='container'>
      <Header />

      <main className={styles.main}>
        {buildRolls()}
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
