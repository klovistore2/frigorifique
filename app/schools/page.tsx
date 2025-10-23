// app/school/page.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `School Programs${titleSuffix}`,
    description: "Explore JumpArena's school programs, offering tailored trampoline packages for PE classes and school trips across the UK.",
    keywords: "school programs, trampoline park uk, pe classes, school trips, jumparena education",
    openGraph: {
      title: `School Programs${titleSuffix}`,
      description: "Discover JumpArena's innovative school programs with trampoline-based PE and trips across the UK.",
      url: `${domain}/schools`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena School Programs",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `School Programs${titleSuffix}`,
      description: "Learn about JumpArena's school trampoline programs across the UK!",
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
      canonical: `${domain}/schools`, // Canonical URL for SEO
    },
  };
};

export default function School() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-school.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">School Programs at JumpArena</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">Adrenaline-Fueled Learning!</p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Trampolining for Education</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            JumpArena offers an innovative approach to physical education with trampolining—one of the most effective low-impact exercises to engage and excite children about fitness. Our school programs are designed to inspire young learners, combining fun with developmental benefits in a safe, supervised environment.
          </p>
          <p className="mb-6">
            Whether it’s an end-of-term reward trip, a structured PE class, or a school outing, our tailored packages meet your needs. Watch students develop essential skills while enjoying the thrill of bouncing across our state-of-the-art trampoline parks.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Our School Packages</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            We provide customizable packages for all school groups, ensuring a perfect fit for your curriculum or event. From reward trips to PE integration, our team works with you to create a memorable experience.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Why Choose JumpArena?</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            Our highly trained staff create a fun and secure environment that fosters growth and development. Trampolining at JumpArena enhances:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Teamwork and interpersonal relationships</li>
            <li>Sportsmanship and competitive spirit</li>
            <li>Motor skill development and coordination</li>
            <li>Balance and spatial awareness</li>
          </ul>
          <p className="mb-6">
            With padded courts and expert supervision, students of all ages thrive, from toddlers mastering their first jumps to teens building fitness.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Contact Us</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Leeds</h3>
            <p className="mb-1">01132 635951</p>
            <p>leeds@jumparena.co.uk</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Luton</h3>
            <p className="mb-1">01582 724440</p>
            <p>luton@jumparena.co.uk</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Gateshead</h3>
            <p className="mb-1">01916 912756</p>
            <p>gateshead@jumparena.co.uk</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Cardiff</h3>
            <p className="mb-1">02922 402079</p>
            <p>cardiff@jumparena.co.uk</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* JSON-LD Schema for EducationalOrganization */}
      <Script
        id="school-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "JumpArena School Programs",
            "description": "JumpArena offers innovative trampoline-based school programs for PE classes and school trips across the UK.",
            "url": `${coreData.domain}/school`,
            "sameAs": [coreData.domain],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Various Locations, UK",
              "addressCountry": "GB",
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+44-113-263-5951",
                "contactType": "Customer Service",
                "email": "leeds@jumparena.co.uk",
                "areaServed": "Leeds",
              },
              {
                "@type": "ContactPoint",
                "telephone": "+44-1582-724440",
                "contactType": "Customer Service",
                "email": "luton@jumparena.co.uk",
                "areaServed": "Luton",
              },
              {
                "@type": "ContactPoint",
                "telephone": "+44-1916-912756",
                "contactType": "Customer Service",
                "email": "gateshead@jumparena.co.uk",
                "areaServed": "Gateshead",
              },
              {
                "@type": "ContactPoint",
                "telephone": "+44-2922-402079",
                "contactType": "Customer Service",
                "email": "cardiff@jumparena.co.uk",
                "areaServed": "Cardiff",
              },
            ],
            "potentialAction": {
              "@type": "BookAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${coreData.domain}/booking-now`,
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