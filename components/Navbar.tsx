import Image from 'next/image'
import {
  IconTableauBord,
  IconRepertoire,
  IconModeModification,
  IconBoussole,
  IconVector,
  IconNotification,
  IconChat,
  IconTrad,
} from './NavIcons'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>

        <div className={styles.navbarTop}>
          <Image
            src="/logoStolosSansMention.svg"
            alt="Logo"
            width={27}
            height={32}
            className={styles.navbarLogo}
          />
          <div className={styles.navbarBeta}>
            <span className={styles.navbarBetaLabel}>Bêta</span>
          </div>
        </div>

        <div className={styles.navbarLinks}>

          <div className={styles.navbarLinksTop}>
            <button className={styles.navButton}>
              <span className={styles.navButtonIcon}><IconTableauBord /></span>
            </button>
            <button className={styles.navButton}>
              <span className={styles.navButtonIcon}><IconRepertoire /></span>
            </button>
            <button className={styles.navButton}>
              <span className={styles.navButtonIcon}><IconModeModification /></span>
            </button>
            <button className={styles.navButton}>
              <span className={styles.navButtonIcon}><IconBoussole /></span>
            </button>
            <button className={styles.navButton}>
              <span className={styles.navButtonIcon}><IconVector /></span>
            </button>
          </div>

          <div className={styles.navbarLinksBottom}>

            <div className={styles.navButtonWithDot}>
              <button className={styles.navButtonSmall}>
                <span className={styles.navButtonIcon}><IconNotification /></span>
              </button>
              <div className={styles.notifDot}/>
            </div>

            <div className={styles.navButtonWithDot}>
              <button className={styles.navButtonSmall}>
                <span className={styles.navButtonIcon}><IconChat /></span>
              </button>
              <div className={styles.notifDot}/>
            </div>

            <button className={styles.navButtonSmall}>
              <span className={styles.navButtonIcon}><IconTrad /></span>
            </button>

            <div className={styles.navProfileFrame}>
              <Image
                src="/imageProfil.svg"
                alt="Photo profil"
                width={40}
                height={40}
                className={styles.navProfilePhoto}
              />
              <div className={styles.navHecBadge}>
                <div className={styles.navHecInner}>
                  <Image
                    src="/logoHEC.svg"
                    alt="HEC"
                    width={13}
                    height={7}
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}