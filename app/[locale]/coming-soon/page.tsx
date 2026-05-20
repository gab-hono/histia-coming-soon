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
              src="/logoStolos.png"
              alt="Stolos"
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

              {/* Botón 1: soporte con punto */}
              <div className={styles.navButtonWithDot}>
                <button className={styles.navButtonSmall}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="3" width="16" height="18" rx="1"
                      stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
                  </svg>
                </button>
                <div className={styles.notifDot}/>
              </div>

              {/* Botón 2: silueta usuario sólida + punto */}
              <div className={styles.navButtonWithDot}>
                <button className={styles.navButtonSmall}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
                      fill="rgba(255,255,255,0.7)"
                    />
                    <path
                      d="M2 20C2 17 6.47715 14 12 14C17.5228 14 22 17 22 20"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div className={styles.notifDot}/>
              </div>

              {/* Frame 2652: foto perfil + logo HEC */}
              <div className={styles.navProfileFrame}>
                <div className={styles.navProfilePhoto}/>
                <div className={styles.navHecBadge}>
                  <div className={styles.navHecInner}/>
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
              <p className={styles.descriptionLine1}>
                <span className={styles.descriptionText}>
                  {content.description1.value}{' '}
                </span>
                <span className={styles.descriptionBrand}>
                  {content.brandName.value}
                </span>
                <span className={styles.descriptionText}>
                  {' '}{content.description2.value}
                </span>
              </p>
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