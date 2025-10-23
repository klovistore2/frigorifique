import { Button } from "@/components/ui/button"; // Shadcn vibes—if not setup, swap for vanilla <button>
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `Arena Rules${titleSuffix}`,
    description: "Learn the safety rules and guidelines for an epic bounce at JumpArena trampoline parks across the UK.",
    keywords: "arena rules, jumparena safety, trampoline guidelines, uk trampoline park",
    openGraph: {
      title: `Arena Rules${titleSuffix}`,
      description: "Review the essential safety rules for bouncing at JumpArena parks across the UK.",
      url: `${domain}/arena-rules`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Safety Rules",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Arena Rules${titleSuffix}`,
      description: "Check JumpArena's safety rules for the ultimate trampoline experience!",
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
      canonical: `${domain}/arena-rules`, // Canonical URL for SEO
    },
  };
};

export default function ArenaRulesPage() {
  // Bounce squad, here's your spun /arena-rules page: Took the archived AirHop/JumpArena essence, flipped it generic & fun—neon dark sauce, no location specifics (bye Cardiff/Leeds, hi universal jumps!). 
  // Spun text: Amped the funny (risks? "Gravity's revenge!"), kept rules lean/intuitive, added sections for flow. Hero hook, rules grid, refund deets, CTA. Mobile glow-up with responsive grid.

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Flip */}
      <section className="relative py-32 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-rules-neon.jpg')" }}> {/* Placeholder—swap for trampoline safety glow */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-8xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Arena Rules</h1>
          <p className="text-4xl mb-10 text-white/90 font-light">Bounce Smart, Stay Safe—Our Guide to Epic Flips!</p>
        </div>
      </section>

      {/* Intro & Awareness */}
      <section className="py-16 px-6 bg-gray-800/60">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-5xl font-bold text-fuchsia-500">Know the Rules Before You Launch!</h2>
          <p className="text-xl text-gray-300">Our safety vibes are all about max fun with zero oops. Get the lowdown, then bounce like a boss!</p>
        </div>
      </section>

      {/* Safety Standards & Risks */}
      <section className="py-16 px-6 bg-black/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-fuchsia-500">Safety First, Flips Forever</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">The Fine Print (But Fun!)</h3>
              <p className="text-gray-300">By snagging a ticket and stepping in, you're in for trampolining, dodgeball, slam dunks, and freestyle chaos. You get the risks—bumps, bruises, or gravity's revenge—and you're cool with 'em. Under 12? Bring a grown-up watchdog. Max weight: 200kg (chat your doc if unsure). Break rules? We bounce you out—no refunds!</p>
            </div>
            <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">What You're Signing Up For</h3>
              <ul className="text-gray-300 list-disc pl-6 space-y-2">
                <li>Voluntary risk-taking—fun's worth it!</li>
                <li>Supervision required for mini-jumpers</li>
                <li>Health check: Get cleared if needed</li>
                <li>Play nice or pay the price (suspension!)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-16 px-6 bg-gray-800/60">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl font-bold text-center text-fuchsia-500">Refund Rules—Keep It Bouncy</h2>
          <ul className="text-xl text-gray-300 list-disc pl-6 space-y-4">
            <li>No reselling or swapping bookings—your spot's yours!</li>
            <li>10+ peeps? That's a group gig.</li>
            <li>Must be 18+ to book (grown-ups only).</li>
            <li>Refunds? Only if we drop the ball on our end.</li>
            <li>Deals drop randomly—snag 'em quick, no extensions!</li>
            <li>Online bookings: No refunds within 28 days of jump time.</li>
          </ul>
        </div>
      </section>

      {/* Promo Vibes – Spun Generic */}
      <section className="py-16 px-6 bg-black/80">
        <h2 className="text-5xl font-bold text-center mb-12 text-fuchsia-500">Why JumpArena Rocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Toddler Bounce Classes</h3>
            <p className="text-gray-300 mb-4">Watch your mini-me master balance and coordination on trampolines—fun lessons that build skills with giggles!</p>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Dodgeball Domination</h3>
            <p className="text-gray-300 mb-4">Team up, bounce high, and dodge like a pro—epic games that turn rivals into high-flying fun!</p>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Birthday & Kids Parties</h3>
            <p className="text-gray-300 mb-4">Themed trampoline bashes—Frozen, Minions, or pure chaos—with food, friends, and gravity-defying cake moments!</p>
          </div>
        </div>
      </section>

      {/* CTA Bounce */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-black">
        <h2 className="text-6xl font-bold mb-6 text-pink-500 drop-shadow-md">Ready to Rule the Arena?</h2>
        <p className="text-xl mb-8 text-white/90">Know the drill, now drill the jumps!</p>
        <Button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300">
          Book Your Bounce
        </Button>
      </section>

      {/* JSON-LD Schema for WebSite with Rules */}
      <Script
        id="arena-rules-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": `${coreData.domain}/arena-rules`,
            "name": "JumpArena Arena Rules",
            "description": "Safety guidelines and rules for an epic bounce at JumpArena trampoline parks across the UK.",
            "potentialAction": {
              "@type": "ReadAction",
              "target": `${coreData.domain}/arena-rules`,
            },
            "hasPart": {
              "@type": "WebPage",
              "name": "Arena Rules",
              "description": "Essential safety and refund rules for JumpArena visitors.",
              "url": `${coreData.domain}/arena-rules`,
            },
          }),
        }}
      />
    </div>
  );
}