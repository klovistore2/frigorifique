// app/landlords/page.tsx
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Landlords Partnership${titleSuffix}`,
    description: "Join JumpArena as a landlord partner to expand trampoline parks across the UK with mutually beneficial opportunities.",
    keywords: "landlords partnership, jumparena collaboration, uk trampoline parks, property investment",
    openGraph: {
      title: `Landlords Partnership${titleSuffix}`,
      description: "Partner with JumpArena to develop trampoline parks across the UK as a landlord.",
      url: `${domain}/landlords`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Landlords Partnership",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Landlords Partnership${titleSuffix}`,
      description: "Become a JumpArena landlord partner and grow trampoline parks in the UK!",
      images: [`${domain}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${domain}/landlords`, // Canonical URL for SEO
    },
  };
};

export default function Landlords() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-landlords.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Landlords Partnership</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">Join Hands with JumpArena!</p>
        </div>
      </section>

      {/* Property Partnership Section */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Do You Have the Perfect Property?</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            At JumpArena, we are committed to expanding our network of premier trampoline parks across the UK, and we need the right partners to make it happen. If you own property and share our vision of building vibrant leisure brands, we invite you to collaborate with us. We are seeking landlords who can provide ideal spaces to establish our state-of-the-art parks, creating mutually beneficial opportunities.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white">Criteria for Partnership</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Primary retail leisure park destinations with a catchment area of at least 120,000 people.</li>
            <li>D2 use-class suitable property, preferably with ample parking facilities.</li>
            <li>Minimum open-plan space of 20,000 square feet.</li>
            <li>Ceiling height of at least 20-22 feet to accommodate our trampoline structures.</li>
          </ul>
        </div>
      </section>

      {/* Have a Query? */}
      <section className="py-16 px-6 text-center bg-gray-800/60">
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-500">Have a Query?</h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          If your property meets these criteria, we’d love to hear from you! Please contact us via our web form to discuss potential partnership opportunities and how we can bring a JumpArena park to your location.
        </p>
        <Link href="/contact">
          <Button
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </Button>
        </Link>
      </section>

      {/* JSON-LD Schema for RealEstateAgent */}
      <Script
        id="landlords-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "JumpArena Landlords Partnership",
            "description": "JumpArena seeks landlords to partner in expanding trampoline parks across the UK.",
            "url": `${coreData.domain}/landlords`,
            "sameAs": [coreData.domain],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Various Locations, UK",
              "addressCountry": "GB",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+44-123-456-7890", // Placeholder, update with real number
              "contactType": "Customer Service",
              "email": "landlords@jumparena.co.uk", // Placeholder email
              "areaServed": "UK",
            },
            "potentialAction": {
              "@type": "ContactAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${coreData.domain}/contact`,
                "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
            "image": `${coreData.domain}${coreData.ogImage}`,
          }),
        }}
      />
    </div>
  );
}