//app/[locale]/coming-soon/page.tsx

import { getIntlayer } from 'next-intlayer'
import { LocalesValues } from 'intlayer'
import Image from 'next/image'
import MascotFR from '@/components/MascotFR'
import MascotEN from '@/components/MascotEN'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'

type Props = {
  params: Promise<{ locale: LocalesValues }>
}

export default async function ComingSoonPage({ params }: Props) {
  const { locale } = await params
  const content = getIntlayer('coming-soon', locale)
  const isFR = locale === 'fr'

  return (
    <div className={styles.page}>

    <Navbar />

      <main className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>{content.badge.value}</span>
        </div>

        <div className={styles.contentBody}>
          <div className={styles.contentText}>
            <h1 className={styles.title}>{content.title.value}</h1>

            <div className={styles.description}>

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

              <span className={styles.descriptionText}>
                {content.description2.value}
              </span>

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


      <div className={styles.mascot}>
        {isFR ? <MascotFR /> : <MascotEN />}
      </div>

    </div>
  )
}