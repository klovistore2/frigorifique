// app/terms-and-conditions/page.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-terms.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Terms and Conditions</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">For JumpArena Blog Usage</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/80 rounded-lg overflow-hidden">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">1. Acceptance of Terms</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                By accessing or using the JumpArena blog at <a href="https://jumparena.co.uk" className="text-cyan-400 hover:text-cyan-300 underline">https://jumparena.co.uk</a>, you agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using the site.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">2. Use of Content</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                All content on the JumpArena blog, including articles, images, and videos, is owned by JumpArena or its licensors. You may view and share content for personal, non-commercial use, provided you credit JumpArena and include a link to the original post. Unauthorized reproduction or distribution is prohibited.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">3. User Contributions</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                If you submit comments or content to the blog, you grant JumpArena a non-exclusive, royalty-free license to use, display, and publish it. You are responsible for ensuring your contributions are lawful and do not infringe on third-party rights.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">4. Limitation of Liability</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                JumpArena is not liable for any indirect, incidental, or consequential damages arising from your use of the blog. The content is provided "as is" without warranties of accuracy or completeness.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">5. Changes to Terms</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                JumpArena reserves the right to update these Terms and Conditions at any time. Changes will be posted on this page, and continued use of the blog constitutes acceptance of the revised terms.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">6. Governing Law</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                These Terms and Conditions are governed by the laws of the United Kingdom. Any disputes will be resolved in the courts of England and Wales.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">7. Contact Us</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                For questions or concerns, contact us at <a href="mailto:info@jumparena.co.uk" className="text-cyan-400 hover:text-cyan-300 underline">info@jumparena.co.uk</a> or via our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Terms and Conditions | JumpArena Blog",
    description: "Review the Terms and Conditions for using the JumpArena blog at jumparena.co.uk, covering content usage, liability, and more.",
    keywords: "terms and conditions, jumparena blog, website terms, uk trampoline blog",
  };
}