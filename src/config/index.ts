import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Astra - AI Based Web Builder",
        template: `%s | Astra`
    },
    description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Astra - AI Powered Website Builder",
        description: "Astra is an AI powered website builder that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://astra-landingpage.vercel.app"),
};