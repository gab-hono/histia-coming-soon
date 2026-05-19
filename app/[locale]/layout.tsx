import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { IntlayerClientProvider } from "next-intlayer";
import type { LocalesValues } from "intlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Histia - Page en construction",
    description: "Cette page arrive bientôt",
};

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: LocalesValues }>;
}) {
    const { locale } = await params;

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <IntlayerClientProvider locale={locale}>
                    {children}
                </IntlayerClientProvider>
            </body>
        </html>
    );
}