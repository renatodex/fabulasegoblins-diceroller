import { withTranslation } from 'i18n'
import Anchor from 'components/anchor/anchor'
import styles from './roll_card.module.scss'

const RollCard = ({ t, roll, onRoll, allowRoll = false }) => {
  const cardClass = () => {
    if (roll.critical_success) {
      return `${styles.card} ${styles['card--success']}`
    } else if (roll.critical_failure) {
      return `${styles.card} ${styles['card--failure']}`
    } else {
      return `${styles.card} ${styles['card--normal']}`
    }
  }

  const cardLabel = () => {
    if (roll.critical_success) {
      return <strong>{t('roll.critical_success')}</strong>
    } else if (roll.critical_failure) {
      return <strong>{t('roll.critical_failure')}</strong>
    } else {
      return t('roll.normal_roll')
    }
  }

  const modifierText = () => {
    if (roll.modifier && roll.modifier > 0) {
      return `+${roll.modifier}`
    }

    if (roll.modifier && roll.modifier < 0) {
      return `${roll.modifier}`
    }

    return `+0`
  }

  const renderResult = () => {
    if (roll.result) {
      return (
        <div
          className={`${styles.result} ${styles['result--rolled']}`}
        >
          {t('roll.result')}: {roll.result_calculated} ({roll.result}{modifierText()})
        </div>
      )
    } else {
      if (allowRoll) {
        return (
          <div
            onClick={(e) => { e.preventDefault(); onRoll(roll) }}
            className={`${styles.result} ${styles['result--pending']}`}
          >
            {t('roll.roll_button_cta')}
          </div>
        )
      } else {
        return (
          <div
            className={`${styles.result} ${styles['result--not-rolled']}`}
          >
            {t('roll.not_rolled')}
          </div>
        )
      }
    }
  }

  return (
    <a
      href={`/rolls/${roll.token}`}
      key={roll.token}
      className={cardClass()}
    >
      <h3>Token: {roll.token.split('', 7)}...{roll.token.slice(-7)}</h3>
      <p>Número de Faces: {roll.total_faces}</p>
      <p>Modificadores: {roll.modifier || '-'}</p>
      <p>Data de Criação: {roll.created_at}</p>
      <p>{cardLabel()}</p>

      {renderResult()}
    </a>
  )
}

export default withTranslation('common')(RollCard)
