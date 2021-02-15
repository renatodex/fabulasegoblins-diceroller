import styles from './footer.module.scss'
import Anchor from 'components/anchor/anchor'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Anchor
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
        className={styles.a}
      >
        Powered by{' '}
        <img src='/footer-logo.png' alt='Fábulas & Goblins' className={styles.logo} />
      </Anchor>
    </footer>
  )
}

export default Footer
