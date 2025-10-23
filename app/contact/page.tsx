// app/contact/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react"; // Icons for that extra bounce
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Get in Touch${titleSuffix}`,
    description: "Contact JumpArena for trampoline park inquiries, bookings, and support across the UK.",
    keywords: "jumparena contact, trampoline park support, uk bounce inquiries, contact us",
    openGraph: {
      title: `Get in Touch${titleSuffix}`,
      description: "Reach out to JumpArena for trampoline park information and bookings across the UK.",
      url: `${domain}/contact`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Contact Page",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Get in Touch${titleSuffix}`,
      description: "Contact JumpArena for trampoline park details and bookings!",
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
      canonical: `${domain}/contact`, // Canonical URL for SEO
    },
  };
};

export default function ContactPage() {
  // Spun text: Kept the core bounce but cranked up the fun—think trampoline vibes meets customer love.
  const spunText = "Bounce Into Chat! At JumpArena, we're all about flipping your fun to max height with top-tier service. Got questions or epic ideas? Hit us up—no flips required. For bookings, prices, or party bounces, dial your local spot directly (deets on our 'Find Your Nearest Centre' page). Calls? 7p/min + your phone's sneaky access/network fees (they vary, sneaky buggers!).";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Bounce */}
      <section className="relative py-32 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-contact-neon.jpg')" }}> {/* Swap img if ya got one */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-7xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Get in Touch!</h1>
          <p className="text-2xl mb-8 text-white/90 font-light">{spunText}</p>
        </div>
      </section>

      {/* Contact Deets & Form */}
      <section className="py-16 px-6 bg-gray-800/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-fuchsia-500">Reach Out & Bounce Back</h2>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-pink-500" />
              <a href="mailto:info@jumparena.co.uk" className="text-xl hover:text-fuchsia-300">info@jumparena.co.uk</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-pink-500" />
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-pink-500" />
              <p className="text-xl">Find your local leap: Check our locations!</p>
            </div>
          </div>

          {/* Form Side – Intuitive AF, with validation vibes */}
          <form className="space-y-6 bg-gray-700/80 p-8 rounded-xl shadow-2xl"> {/* Placeholder action */}
            <div>
              <Label htmlFor="name" className="text-white">Your Name (or Bounce Alias)</Label>
              <Input id="name" placeholder="JumpMaster3000" className="mt-2 bg-gray-800 text-white border-gray-600" />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">Email (for Quick Flips Back)</Label>
              <Input id="email" type="email" placeholder="you@epicbounce.com" className="mt-2 bg-gray-800 text-white border-gray-600" />
            </div>
            <div>
              <Label htmlFor="message" className="text-white">Your Message (Spill the Beans!)</Label>
              <Textarea id="message" placeholder="What's bouncing in your mind?" className="mt-2 bg-gray-800 text-white border-gray-600 h-32" />
            </div>
            <Button className="w-full bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600">
              Launch Message!
            </Button>
          </form>
        </div>
      </section>

      {/* Calendar Vibes – Open Every Day, No Chill */}
      <section className="py-16 px-6 bg-black/80 text-center">
        <h2 className="text-5xl font-bold mb-8 text-fuchsia-500">We're Open Every Day – Come Bounce Anytime!</h2>
        <p className="text-xl mb-6 text-white/90">Pick a date, any date – we're flipping ready. (Hours may vary by location, but the doors are open daily!)</p>
      </section>

      {/* CTA Bounce */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-black">
        <h2 className="text-6xl font-bold mb-6 text-pink-500 drop-shadow-md">Questions? We've Got Answers!</h2>
        <p className="text-xl mb-8 text-white/90">Or just say hi – we're friendly folk.</p>
        <a href="/">
          <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300">
            Back to Home
          </button>
        </a>
      </section>

      {/* JSON-LD Schema for ContactPage */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "JumpArena Contact Page",
            "description": "Get in touch with JumpArena for trampoline park inquiries and support across the UK.",
            "url": `${coreData.domain}/contact`,
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "info@jumparena.co.uk",
                "areaServed": "UK",
              },
            ],
            "potentialAction": {
              "@type": "ContactAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${coreData.domain}/contact`,
                "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
              },
            },
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