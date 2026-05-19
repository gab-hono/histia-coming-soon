import { DeclarationContent, t } from "intlayer";
import { title } from "process";

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
            en: "We are still in beta version,"
        }),
        brandName: t({
            fr: "Stolos",
            en: "Stolos",
        }),
        description2: t({
            fr: "n'est pas encore complet, notre équipe travaille d'arrache pied pour vous apporter cette page au plus vite !",
            en: "is not yet complete, our team is working hard to bring you this page as soon as possible!",
        }),
        linkText: t({
            fr: "Nos nouveautés ici",
            en: "Our latest updates here",
        }),
    },
} satisfies DeclarationContent;

export default comingSoonContent;