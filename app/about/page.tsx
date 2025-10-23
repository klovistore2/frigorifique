// app/about/page.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-about.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">About JumpArena</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">Where the Bounce Revolution Began</p>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Our Story</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <p className="mb-6">
            JumpArena was founded in 2015 with a bold vision: to redefine family entertainment by bringing the thrill of trampolining to communities across the UK. What started as a single park has grown into a network of state-of-the-art trampoline destinations, offering open jump sessions, dodgeball arenas, foam pits, and themed events. Our mission is to inspire active lifestyles, foster joy, and create unforgettable experiences for all ages.
          </p>
          <p className="mb-6">
            Over the years, we’ve expanded our reach, partnering with passionate franchisees and innovative landlords to establish parks in key locations. Today, JumpArena is a leader in the leisure industry, blending cutting-edge design with a commitment to safety and fun.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Meet Our Team</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-700/80 rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Mark Veigh - CEO</h3>
              <p className="text-sm text-gray-400">With 15 years in leisure management, Jane drives JumpArena’s growth and innovation.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700/80 rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Nicolas Oburn - Operations Director</h3>
              <p className="text-sm text-gray-400">John oversees park safety and training, ensuring every jump is a safe thrill.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-500">Our Values</h2>
        <div className="max-w-4xl mx-auto text-lg text-white/80 leading-relaxed">
          <ul className="list-disc list-inside space-y-4">
            <li><strong>Safety First:</strong> Rigorous standards and trained staff ensure a secure bouncing environment.</li>
            <li><strong>Innovation:</strong> We pioneer new trampoline experiences, from fitness classes to themed events.</li>
            <li><strong>Community:</strong> We build local connections through family fun and charitable initiatives.</li>
            <li><strong>Excellence:</strong> Every park delivers top-tier quality, from design to customer service.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gray-800/60">
        <h2 className="text-4xl font-bold mb-6 text-fuchsia-500">Join the JumpArena Family</h2>
        <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Whether you’re interested in visiting, franchising, or partnering as a landlord, JumpArena welcomes you to be part of our bounce revolution.
        </p>
        <div className="space-x-4">
          <Button
            asChild
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/franchise">Franchise Info</Link>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-cyan-500 hover:to-cyan-500 text-white px-6 py-3 rounded-lg text-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/landlords">Landlord Partnership</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const { domain } = coreData;
  return {
    title: "About JumpArena - Trampoline Parks UK",
    description: "Learn about JumpArena, the leading trampoline park network in the UK, dedicated to fun, safety, and innovation since 2015.",
    keywords: "about jumparena, trampoline parks uk, jumparena history, leisure innovation",
    alternates: {
      canonical: `${domain}/about`, // Canonical URL for SEO
    },
  };
}