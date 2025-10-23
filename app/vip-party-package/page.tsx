// app/vip-party-package/page.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `VIP Party Package${titleSuffix}`,
    description: "Discover JumpArena's VIP Party Package for corporate team-building and kids' birthdays, starting at £12.50 per person across the UK.",
    keywords: "vip party package, corporate events, kids birthday parties, trampoline park uk, jumparena packages",
    openGraph: {
      title: `VIP Party Package${titleSuffix}`,
      description: "Explore JumpArena's premium VIP Party Package for corporate and birthday events across the UK.",
      url: `${domain}/vip-party-package`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena VIP Party Package",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `VIP Party Package${titleSuffix}`,
      description: "Book the ultimate VIP Party Package at JumpArena for corporate or kids' events!",
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
      canonical: `${domain}/vip-party-package`, // Canonical URL for SEO
    },
  };
};

export default function VipPartyPackage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-vip-party.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">VIP Party Package</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">Elevate Your Corporate Events & Birthdays!</p>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Unmatched Entertainment for All</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            Transform your corporate team-building or child’s birthday into an unforgettable experience with JumpArena’s VIP Party Package. Designed for businesses and families alike, this premium offering takes the stress out of event planning. We handle everything—venue setup, custom invitations, decorations, and cleanup—leaving you to enjoy the day. Starting at just £12.50 per person, our packages cater to all budgets and preferences.
          </p>
          <p className="mb-6">
            Whether it’s a corporate retreat with trampoline-based challenges to boost team morale or a child’s milestone celebration with themed fun, our VIP packages deliver. Choose from Silver, Gold, or No Food options, each including a private room or booth and a dedicated host to ensure a memorable event.
          </p>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">VIP Package Options</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-700/80 rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Bronze Package - £12.50/person</h3>
              <p className="text-sm text-gray-400">1 hour of trampoline access with a party host. Ideal for budget-friendly fun (food and room not included).</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700/80 rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Silver Package - £15.99/person</h3>
              <p className="text-sm text-gray-400">1.5 hours of jumping, private booth, host, and basic food options (pizza, drinks).</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700/80 rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Gold Package - £18.99/person</h3>
              <p className="text-sm text-gray-400">2 hours of VIP access, private room, host, deluxe food (chicken, cookies), and themed decorations.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700/80 rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">No Food Package - £12.50/person</h3>
              <p className="text-sm text-gray-400">2 hours of jumping, private booth, host—bring your own catering for flexibility.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            “The VIP package for our corporate retreat was a game-changer! The team loved the trampoline challenges, and the setup was flawless.” – Alex T., Team Leader
          </p>
          <p className="mb-6">
            “My son’s 10th birthday was epic with the Gold Package—food, fun, and friends, all handled by JumpArena. Highly recommend!” – Sarah M., Parent
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gray-800/60">
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-500">Book Your VIP Experience</h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Reserve your corporate event or birthday party today. Contact us for a no-obligation enquiry and let’s make it a bounce to remember!
        </p>
        <Button
          className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          Enquire Now
        </Button>
      </section>

      {/* JSON-LD Schema for Event */}
      <Script
        id="vip-party-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "VIP Party Package",
            "description": "A premium trampoline party package for corporate team-building and kids' birthdays, starting at £12.50 per person.",
            "startDate": new Date().toISOString().split('T')[0], // Generic start date—update with specific dates if available
            "endDate": new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0], // 30 days from now as placeholder
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "VirtualLocation",
              "url": `${coreData.domain}/vip-party-package`,
            },
            "organizer": {
              "@type": "Organization",
              "name": "JumpArena",
              "url": coreData.domain,
            },
            "offers": {
              "@type": "Offer",
              "price": "12.50",
              "priceCurrency": "GBP",
              "availability": "https://schema.org/InStock",
              "url": `${coreData.domain}/vip-party-package`,
              "validFrom": new Date().toISOString(),
            },
            "image": `${coreData.domain}${coreData.ogImage}`,
            "url": `${coreData.domain}/vip-party-package`,
          }),
        }}
      />
    </div>
  );
}