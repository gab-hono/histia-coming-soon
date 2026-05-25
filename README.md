# Histia : Page en Construction

Réplique fidèle d'une page "coming soon" réalisée dans le cadre d'un cas pratique technique.

## Stack technique

- **Next.js 16**  App Router, Server Components
- **TypeScript**
- **Intlayer v8.9.8** internationalisation (FR / EN)
- **CSS Modules** styles fidèles aux mesures Figma
- **Vercel** déploiement

## Lancer le projet

```bash
npm install
npm run dev
```

Le script `dev` lance `intlayer watch` et `next dev` en parallèle.

Ouvrir [http://localhost:3000](http://localhost:3000). Redirige automatiquement vers `/fr/coming-soon`.

Pour la version anglaise : [http://localhost:3000/en/coming-soon](http://localhost:3000/en/coming-soon)

## Choix techniques

**Internationalisation avec Intlayer** : le projet utilise Intlayer v8.9.8 avec le format `key`/`content` qui est requis par cette version. Les textes sont définis dans `intlayer/coming-soon.content.ts` et accessibles via `getIntlayer('coming-soon', locale)`.

**Dimensions fixes** : la page est conçue pour un viewport 1920×1080px, fidèle au design Figma fourni. Pour tester à la bonne résolution, utiliser les DevTools du navigateur avec ces dimensions.

**SVGs inline** : les icônes de la navbar sont des composants SVG inline pour un contrôle précis des couleurs et de l'opacité, conformément au design Figma.

## Ce qui a été répliqué

- Navbar latérale avec logo, badge Bêta, 5 icônes supérieures, 3 icônes inférieures avec points de notification, photo de profil et logo HEC
- Effet glassmorphism sur la navbar (backdrop-filter blur + border)
- Hover sur les boutons de la navbar
- Contenu principal : badge, titre H1, description avec logo inline et mise en forme typographique exacte
- Mascotte différente selon la locale (FR/EN)
- Favicon avec logo Stolos
- Internationalisation complète FR/EN