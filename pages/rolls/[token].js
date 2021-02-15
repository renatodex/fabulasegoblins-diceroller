import Head from 'next/head'
import { withTranslation } from '../../i18n'

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

  const cardClass = roll => {
    if (roll.natural_success) {
      return 'card card--success'
    } else if (roll.natural_failure) {
      return 'card card--failure'
    } else {
      return 'card card--normal'
    }
  }

  const cardLabel = roll => {
    if (roll.natural_success) {
      return <strong>Critical Success!</strong>
    } else if (roll.natural_failure) {
      return <strong>Critical Failure!</strong>
    } else {
      return 'Normal Roll'
    }
  }

  return (
    <div className='container'>
      <Head>
        <title>Roll Info</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <header className='app-header'>
          <img src='/logo.png' width={120} />
          <h1 className='title'>
            {t('title')}
          </h1>

          <p className='description'>
            {t('rollinfo.subtitle')}
          </p>
        </header>

        <div className='grid'>
          {rolls.map((roll) => (
            <a
              href='https://nextjs.org/docs'
              key={roll.token}
              className={cardClass(roll)}
            >
              <h3>Token: {roll.token.split('', 7)}...{roll.token.slice(-7)}</h3>
              <p>Número de Faces: {roll.total_faces}</p>
              <p>Modificadores: {roll.modifier}</p>
              <p>Data de Criação: {roll.created_at}</p>
              <p>{cardLabel(roll)}</p>

              <div>
                Resultado: {roll.result}
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/footer-logo.png' alt='Fábulas & Goblins' className='logo' />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        header, .app-header {
          margin: 0 auto;
          text-align: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: grid;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card--normal {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card--success {
          background-color: rgb(93, 195, 91);
        }

        .card--failure {
          background-color: rgb(215, 68, 68);
        }

        .card--normal {
          background-color: #fff;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card div {
          border: 1px solid #000;
          text-align: center;
          padding: 0.6rem;
          border-radius: 12px;
          font-size: 1.70rem;
          margin-top: 1rem;
          background-color: #000;
          border-color: #fff;
          color: #fff;
        }

        .logo {
          height: 1.5em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

RollInfo.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

export default withTranslation('common')(RollInfo)
