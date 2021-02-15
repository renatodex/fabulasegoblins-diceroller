import { withTranslation } from 'i18n'
import Anchor from 'components/anchor/anchor'
import styles from './roll_card.module.scss'

const RollCard = ({ roll }) => {
  const cardClass = () => {
    if (roll.natural_success) {
      return `${styles.card} ${styles['card--success']}`
    } else if (roll.natural_failure) {
      return `${styles.card} ${styles['card--failure']}`
    } else {
      return `${styles.card} ${styles['card--normal']}`
    }
  }

  const cardLabel = () => {
    if (roll.natural_success) {
      return <strong>Critical Success!</strong>
    } else if (roll.natural_failure) {
      return <strong>Critical Failure!</strong>
    } else {
      return 'Normal Roll'
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
      <p>Modificadores: {roll.modifier}</p>
      <p>Data de Criação: {roll.created_at}</p>
      <p>{cardLabel()}</p>

      <div>
        Resultado: {roll.result}
      </div>
    </a>
  )
}

export default withTranslation('common')(RollCard)
