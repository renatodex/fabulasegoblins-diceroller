import Head from 'next/head'
import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { withTranslation } from 'i18n'
import styles from './roll.module.scss'
import Footer from 'components/footer/footer'
import Header from 'components/header/header'
import RollCard from 'components/roll_card/roll_card'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RollInfo = ({ t }) => {
  const router = useRouter()
  const host = process.env.NEXT_PUBLIC_API_HOST
  const { token } = router.query
  const toastOptions = { autoClose: 3000 }

  const [rolls, setRolls] = useState([])

  const loadRoll = useCallback(() => {
    const load = async () => {
      const response = await axios.get(`${host}/api/v1/rolls/${token}`)
      setRolls([response.data])
    }

    load()
  }, [])

  useEffect(() => {
    loadRoll()
  }, [])

  const onRoll = async roll => {
    const response = await axios.post(`${host}/api/v1/rolls/${roll.token}/redeem`)

    if (response.data.error) {
      toast.error(response.data.error, toastOptions)
    } else {
      toast.success(t('rollinfo.roll_success_message'), toastOptions)
      loadRoll()
    }

    return response
  }

  if (rolls.length === 0) {
    return <div>Loading...</div>
  }

  console.log(rolls)

  return (
    <div className='container'>
      <Header subtitle={t('rollinfo.subtitle')} />

      <main className={styles.main}>
        <div className='grid'>
          {rolls.map(roll => (
            <RollCard
              onRoll={() => {
                onRoll(roll)
              }}
              key={roll.token}
              roll={roll} allowRoll
            />
          ))}
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
