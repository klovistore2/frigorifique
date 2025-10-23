// app/franchise/page.tsx
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Franchise with JumpArena${titleSuffix}`,
    description: "Join JumpArena's franchise program for a turnkey trampoline park business opportunity across the UK.",
    keywords: "jumparena franchise, trampoline park franchise, uk business opportunity, leisure franchise",
    openGraph: {
      title: `Franchise with JumpArena${titleSuffix}`,
      description: "Explore a turnkey franchise opportunity with JumpArena trampoline parks across the UK.",
      url: `${domain}/franchise`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Franchise Opportunity",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Franchise with JumpArena${titleSuffix}`,
      description: "Start your own trampoline park with JumpArena's franchise program!",
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
      canonical: `${domain}/franchise`, // Canonical URL for SEO
    },
  };
};

export default function Franchise() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/jump_arena_1.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Franchise with JumpArena</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">Receive a Turnkey Business Solution!</p>
        </div>
      </section>

      {/* Why JumpArena */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Why Choose JumpArena?</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            Joining the JumpArena franchise program offers you a comprehensive turnkey business solution, backed by a dedicated team with extensive experience in launching and managing successful leisure enterprises. Our expert franchise management team provides full support to ensure your trampoline park thrives in its local market. From day one, we equip you with all the tools, resources, and guidance needed to establish a market-leading jump park, helping you hit the ground running with confidence.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white">Services We Provide</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Expert construction and architectural team to design and build your park from concept to launch.</li>
            <li>Comprehensive on-site and off-site training programs led by our corporate training team.</li>
            <li>A detailed operations manual tailored to streamline park management.</li>
            <li>Custom POS and booking systems designed specifically for trampoline park efficiency.</li>
            <li>Robust marketing, PR, and branding support to boost your visibility.</li>
            <li>A corporate team of operations and marketing professionals for ongoing success.</li>
            <li>Regional performance managers for on-site assistance and optimization.</li>
            <li>A team of real estate experts and partnerships with leading leisure agencies.</li>
          </ul>
          <p className="mb-6">
            Our trampoline parks unlock multiple revenue streams, including open jump sessions, birthday parties, group bookings, corporate team-building events, dodgeball leagues, arena fitness classes, school programs, and specialized before/after-hours activities.
          </p>
        </div>
      </section>

      {/* Investment */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Investment Opportunity</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            JumpArena seeks passionate, entrepreneurial franchise partners committed to delivering exceptional customer service and upholding our brand standards. We are looking for individuals or groups ready to invest in a dynamic leisure business with significant growth potential.
          </p>
          <p className="mb-6">
            <strong>Initial Investment Range:</strong> £500,000 to £1.2 million, depending on park size and location requirements.
          </p>
          <p className="mb-6">
            <strong>Franchise Opportunities Available In:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Leicester</li>
              <li>Southend</li>
              <li>Stockport</li>
              <li>South London</li>
            </ul>
          </p>
          <p className="mb-6">
            We welcome both single-site franchisees and regional partners interested in developing multiple parks across a county. Contact us to explore how you can become part of the JumpArena family.
          </p>
        </div>
      </section>

      {/* Request Information */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-500">Request Information</h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Ready to take the leap? Submit your details below to receive a comprehensive franchise information pack and start your journey with JumpArena.
        </p>
        <Button
          className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          Contact Us
        </Button>
      </section>

      {/* Our Latest Opening */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Our Latest Opening</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            <strong>Opening Weekend Success - Gateshead Park:</strong> Our newest JumpArena location in Gateshead welcomed nearly 1,500 enthusiastic jumpers during its grand opening over the bank holiday weekend. The event garnered significant attention, with 12,000 viewers tuning in via our Facebook Live Stream.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-white">Q&A with Franchisees Maggie & Vaughan</h3>
          <p className="mb-4"><strong>Backgrounds:</strong> After nine years as a stay-at-home mum, Maggie sought a new career path away from IT consultancy, while Vaughan aimed to transition from his consultancy role. They craved the autonomy of self-employment and a better work-life balance, recognizing the demands but embracing the opportunity to be their own bosses.</p>
          <p className="mb-4"><strong>What Drew Them to JumpArena:</strong> After months of exploring leisure franchises, Maggie and Vaughan were captivated by the JumpArena team’s professionalism and industry expertise. The child-focused market and the promise of bringing joy—contrasting their financial services past—sealed the deal.</p>
          <p className="mb-4"><strong>Their Experience:</strong> Supported by a dedicated team of marketing, sales, and operations experts, the couple navigated the process seamlessly. The franchisor provided a robust launch framework and intensive staff training, covering first aid, customer service, and park operations, building their confidence from the start.</p>
          <p className="mb-4"><strong>Opening Weekend:</strong> Launched during the summer half term, the Gateshead park was met with an overwhelming community response. The staff’s dedication ensured a flawless, high-energy opening.</p>
          <p className="mb-6"><strong>Future Outlook:</strong> Energized by the experience, Maggie and Vaughan plan to expand, eyeing additional parks. The franchisor’s support has given them the expertise to succeed, transforming their lives and business ambitions.</p>
        </div>
      </section>

      {/* JSON-LD Schema for BusinessOpportunity */}
      <Script
        id="franchise-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BusinessOpportunity",
            "name": "JumpArena Franchise Opportunity",
            "description": "Join JumpArena's franchise program for a turnkey trampoline park business with full support and multiple revenue streams.",
            "url": `${coreData.domain}/franchise`,
            "businessType": "Franchise",
            "price": {
              "@type": "PriceSpecification",
              "price": "500000.00",
              "priceCurrency": "GBP",
              "minPrice": "500000.00",
              "maxPrice": "1200000.00",
            },
            "areaServed": "UK",
            "eligibleRegion": [
              "Leicester",
              "Southend",
              "Stockport",
              "South London"
            ],
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString(),
            "potentialAction": {
              "@type": "ContactAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${coreData.domain}/contact`,
                "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
            "image": `${coreData.domain}${coreData.ogImage}`,
            "provider": {
              "@type": "Organization",
              "name": "JumpArena",
              "url": coreData.domain,
            },
          }),
        }}
      />
    </div>
  );
}