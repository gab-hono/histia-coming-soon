//app/[locale]/coming-soon/page.tsx

import { getIntlayer } from 'next-intlayer'
import { LocalesValues } from 'intlayer'
import Image from 'next/image'
import MascotFR from '@/components/MascotFR'
import MascotEN from '@/components/MascotEN'
import {
  IconTableauBord,
  IconRepertoire,
  IconModeModification,
  IconBoussole,
  IconVector,
  IconChat,
  IconNotification,
  IconTrad,
} from '@/components/NavIcons'
import styles from './page.module.css'

type Props = {
  params: Promise<{ locale: LocalesValues }>
}

export default async function ComingSoonPage({ params }: Props) {
  const { locale } = await params
  const content = getIntlayer('coming-soon', locale)
  const isFR = locale === 'fr'

  return (
    <div className={styles.page}>

      {/* ── NAVBAR ── */}
      <div className={styles.navbarWrapper}>
        <nav className={styles.navbar}>

          {/* Logo + Beta */}
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

          {/* Frame 2652 — enlaces */}
          <div className={styles.navbarLinks}>

            {/* Frame 2645 — íconos superiores */}
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

            {/* Frame 4497 — íconos inferiores */}
            <div className={styles.navbarLinksBottom}>

              {/* Botón notificación con punto */}
              <div className={styles.navButtonWithDot}>
                <button className={styles.navButtonSmall}>
                  <span className={styles.navButtonIcon}><IconNotification /></span>
                </button>
                <div className={styles.notifDot}/>
              </div>

              {/* Botón chat con punto */}
              <div className={styles.navButtonWithDot}>
                <button className={styles.navButtonSmall}>
                  <span className={styles.navButtonIcon}><IconChat /></span>
                </button>
                <div className={styles.notifDot}/>
              </div>

              {/* Traduction button - without dot */}
              <button className={styles.navButtonSmall}>
                <span className={styles.navButtonIcon}><IconTrad /></span>

              </button>


              {/* Frame 2652: foto perfil + logo HEC */}
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
                      alt="logoHEC"
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

      {/* ── CONTENU PRINCIPAL ── */}
      <main className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>{content.badge.value}</span>
        </div>

        <div className={styles.contentBody}>
          <div className={styles.contentText}>
            <h1 className={styles.title}>{content.title.value}</h1>

            <div className={styles.description}>
              {/* Línea 1 */}
              <div className={styles.descriptionRow}>
                <span className={styles.descriptionText}>
                  {content.description1.value}
                </span>
                <Image
                  src="/logoStolosSansMention.svg"
                  alt="Stolos"
                  width={20}
                  height={20}
                  className={styles.descriptionLogoInline}
                />
                <span className={styles.descriptionBrand}>
                  {content.brandName.value}
                </span>
                <span className={styles.descriptionText}>
                  {content.brandSuffix.value}
                </span>
              </div>
              {/* Línea 2 */}
              <span className={styles.descriptionText}>
                {content.description2.value}
              </span>
              {/* Línea 3 */}
              <span className={styles.descriptionText}>
                {content.description3.value}
              </span>
            </div>

          </div>

          <div className={styles.link}>
            <span className={styles.linkArrow}>
              <svg width="19" height="11" viewBox="0 0 19 11" fill="none">
                <path
                  d="M1 5.5H18M18 5.5L13.5 1M18 5.5L13.5 10"
                  stroke="#E1C3FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.linkText}>{content.linkText.value}</span>
          </div>
        </div>
      </main>

      {/* ── MASCOTTE ── */}
      <div className={styles.mascot}>
        {isFR ? <MascotFR /> : <MascotEN />}
      </div>

    </div>
  )
}