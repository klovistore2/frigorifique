import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `JumpArena${titleSuffix}`,
    description: "Unleash the bounce revolution at JumpArena, the ultimate trampoline park experience across the UK!",
    keywords: "jumparena, trampoline parks uk, bounce revolution, dodgeball, foam pit",
    openGraph: {
      title: `JumpArena${titleSuffix}`,
      description: "Discover the ultimate trampoline park experience at JumpArena across the UK.",
      url: `${domain}/`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena Trampoline Parks UK",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `JumpArena${titleSuffix}`,
      description: "Join the bounce revolution at JumpArena UK!",
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
      canonical: `${domain}/`, // Canonical URL for SEO
    },
  };
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-40 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-trampoline-neon.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-4 sm:mb-6 text-fuchsia-500 drop-shadow-lg">JumpArena</h1>
        <p className="text-xl sm:text-2xl md:text-4xl mb-6 sm:mb-10 text-white/90 font-light">Unleash the Bounce Revolution!</p>
        <div className="max-w-md mx-auto bg-gray-800/80 p-4 sm:p-6 rounded-xl shadow-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">Join the Jump Crew</h3>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Jump Email"
              className="flex-1 p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-fuchsia-500 bg-gray-700 text-white"
            />
            <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

      {/* SEO Optimized Paragraph */}
      <section className="py-10 px-6 text-center">
        <p className="text-lg max-w-3xl mx-auto text-white/80 leading-relaxed">
          Welcome to JumpArena, your ultimate guide to the best trampoline parks across the UK! Discover thrilling trampoline experiences, from high-flying jumps to intense dodgeball battles, all within state-of-the-art facilities. Our directory lists top trampoline parks, featuring exciting foam pits, open jump zones, and glow-in-the-dark sessions. Whether you're seeking family fun or an adrenaline rush, find detailed information on locations, opening hours, and special offers. JumpArena is your go-to resource for exploring the UK’s premier trampoline destinations—start your bounce adventure today!
        </p>
      </section>

      <section className="py-16 px-6 text-center bg-gradient-to-r from-gray-800 to-black">
        <a href="/location">
          <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300">
            Find your park
          </button>
        </a>
      </section>

      {/* Exclusive Deals */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-5xl font-bold text-center mb-12 text-fuchsia-500">Flashy Jump Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-white">Midweek Jump Pass</h3>
            <p className="text-gray-300">Unlimited jumps Mon-Thu</p>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-white">Family Bounce Bundle</h3>
            <p className="text-gray-300">save 15%!</p>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-2 text-white">Glow Jump Nights</h3>
            <p className="text-gray-300">Friday nights under UV</p>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="py-16 px-6 bg-black/80">
        <h2 className="text-5xl font-bold text-center mb-12 text-fuchsia-500">Feel the Rush</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <a href="/activities/dodgeball">
            <img src="/dodgeball-neon.jpg" alt="Exciting trampoline dodgeball action at JumpArena" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </a>
          <a href="/activities/basketball-slam-dunk">
            <img src="/slam-dunk-neon.jpg" alt="Thrilling basketball slam dunk at JumpArena park" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </a>
          <a href="/activities/foam-pit">
            <img src="/foam-pit-neon.jpg" alt="Fun foam pit jumps at JumpArena" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </a>
          <a href="/activities/freestyle">
            <img src="/free-jump-neon.jpg" alt="Free-style trampoline jumps at JumpArena" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Activities Cards */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-5xl font-bold text-center mb-12 text-fuchsia-500">Jump Into Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Dodgeball</h3>
            <p className="text-gray-300 mb-4">Intense trampoline dodgeball battles!</p>
            <a href="/activities/dodgeball">
              <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg">
                Join Now
              </button>
            </a>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Foam Pit</h3>
            <p className="text-gray-300 mb-4">Dive into a sea of foam fun!</p>
            <a href="/activities/foam-pit">
              <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg">
                Join Now
              </button>
            </a>
          </div>
          <div className="bg-gray-700/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Open Jump</h3>
            <p className="text-gray-300 mb-4">Free-style bouncing for all!</p>
            <a href="/activities/freestyle">
              <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg">
                Join Now
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Fun Moments with YouTube Shorts */}
      <section className="py-16 px-6 bg-black/80">
        <h2 className="text-5xl font-bold text-center mb-12 text-fuchsia-500">Feel the Rush</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="relative aspect-[9/16] w-full bg-gray-900/50 rounded-lg overflow-hidden border-2 border-fuchsia-500">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/A4Ul15YoNDA"
              title="JumpArena Short 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0"
            ></iframe>
          </div>
          <div className="relative aspect-[9/16] w-full bg-gray-900/50 rounded-lg overflow-hidden border-2 border-fuchsia-500">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/e4WimokKCwE"
              title="JumpArena Short 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0"
            ></iframe>
          </div>
          <div className="relative aspect-[9/16] w-full bg-gray-900/50 rounded-lg overflow-hidden border-2 border-fuchsia-500">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q1PUHERZ3bM" // Pro tip: If this ID is bogus, swap with a real one!
              title="JumpArena Short 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-gray-800 to-black">
        <h2 className="text-6xl font-bold mb-6 text-pink-500 drop-shadow-md">Ready to Soar?</h2>
        <p className="text-xl mb-8 text-white/90">Book your jump and defy gravity today!</p>
        <a href="/booking-now">
          <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300">
            Book Your Jump
          </button>
        </a>
      </section>

      {/* JSON-LD Schema for WebSite with CollectionPage */}
      <Script
        id="home-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "JumpArena",
            "description": "Unleash the bounce revolution at JumpArena, the ultimate trampoline park experience across the UK!",
            "url": `${coreData.domain}/`,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${coreData.domain}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
            "hasPart": [
              {
                "@type": "CollectionPage",
                "name": "Activities",
                "url": `${coreData.domain}/activities`,
                "description": "Explore thrilling trampoline activities at JumpArena.",
              },
              {
                "@type": "CollectionPage",
                "name": "Deals",
                "url": `${coreData.domain}/offers`,
                "description": "Check out exclusive trampoline park offers at JumpArena.",
              },
              {
                "@type": "VideoObject",
                "name": "JumpArena Shorts",
                "description": "Watch exciting trampoline action videos at JumpArena.",
                "thumbnailUrl": `${coreData.domain}${coreData.ogImage}`, // Corrected to use coreData.ogImage
                "contentUrl": "https://www.youtube.com/embed/A4Ul15YoNDA", // Example video
                "embedUrl": "https://www.youtube.com/embed/A4Ul15YoNDA",
                "uploadDate": "2025-09-01T00:00:00Z", // Placeholder date
              },
            ],
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