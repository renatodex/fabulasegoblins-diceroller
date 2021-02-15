import Link from 'next/link'
import styles from './anchor.module.scss'

const Anchor = (props) => {
  return (
    <Link href={props.href}>
      <a {...props} className={styles.a}>
        {props.children}
      </a>
    </Link>
  )
}

export default Anchor
