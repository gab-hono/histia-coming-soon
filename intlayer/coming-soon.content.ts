import { DeclarationContent, t } from "intlayer";

const comingSoonContent = {
    key: "coming-soon",
    content: {
        badge: t({
            fr: "PAGE EN CONSTRUCTION",
            en: "PAGE UNDER CONSTRUCTION"
        }),
        title: t({
            fr: "Cette page arrive bientôt",
            en: "This page is coming soon",
        }),
        description1: t({
            fr: "Nous sommes encore en version bêta,",
            en: "We are still in beta version,",
        }),
        brandName: t({
            fr: "Stolos",
            en: "Stolos",
        }),
        brandSuffix: t({
            fr: "n'est",
            en: "is",
        }),
        description2: t({
            fr: "pas encore complet, notre équipe travaille d'arrache",
            en: "not yet complete, our team is working hard",
        }),
        description3: t({
            fr: "pied pour vous apporter cette page au plus vite !",
            en: "to bring you this page as soon as possible!",
        }),
        linkText: t({
            fr: "Nos nouveautés ici",
            en: "Our latest updates here",
        }),
    },
} satisfies DeclarationContent;

export default comingSoonContent;