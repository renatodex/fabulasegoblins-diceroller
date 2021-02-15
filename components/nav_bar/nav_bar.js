import { withTranslation } from 'i18n'
import styles from './nav_bar.module.scss'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import { useState } from 'react'

const NavBar = ({ t }) => {
  const [interestModal, setInterestModal] = useState(false)
  return (
    <nav className={styles.navbar}>
      <button onClick={() => { setInterestModal(true) }}>
        {t('navbar.new_roll')}
      </button>

      <ModalTransition>
        {interestModal && (
          <Modal
            actions={[
              { text: t('generics.close'), onClick: () => { setInterestModal(false) } }
            ]}
            onClose={() => { setInterestModal(false) }}
            heading={t('navbar.inscription_title')}
          >
            {t('navbar.inscription_body')}
          </Modal>
        )}
      </ModalTransition>
    </nav>
  )
}

export default withTranslation('common')(NavBar)
