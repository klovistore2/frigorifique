// app/privacy-policy/page.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-privacy.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-fuchsia-500 drop-shadow-lg">Privacy Policy</h1>
          <p className="text-2xl md:text-3xl mb-10 text-white/90 font-light">For JumpArena Blog</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/80 rounded-lg overflow-hidden">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">1. Introduction</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Welcome to the Privacy Policy for the JumpArena blog, accessible at <a href="https://jumparena.co.uk" className="text-cyan-400 hover:text-cyan-300 underline">https://jumparena.co.uk</a>. This policy outlines how we handle your privacy, given that we do not collect, store, or process any personal data or use analytics tools.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">2. Data Collection</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                JumpArena does not collect any personal information from visitors to our blog. We do not use cookies, tracking pixels, or third-party analytics services (e.g., Google Analytics) to monitor your activity. Your visit remains anonymous, and no data is recorded or shared.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">3. Use of Information</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                As we do not collect any data, there is no information to use, process, or disclose. Your privacy is fully protected during your time on our site.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">4. Third-Party Links</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Our blog may contain links to external sites. We are not responsible for the privacy practices or content of these third-party websites. Please review their privacy policies separately.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">5. Changes to This Policy</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                JumpArena may update this Privacy Policy to reflect changes in our practices. Any revisions will be posted on this page, and continued use of the blog constitutes acceptance of the updated terms.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">6. Your Rights</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Since no data is collected, you have no data to request, modify, or delete. However, if you have concerns, you can contact us as outlined below.
              </p>

              <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">7. Contact Us</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                For any questions about this Privacy Policy, reach out to us at <a href="mailto:privacy@jumparena.co.uk" className="text-cyan-400 hover:text-cyan-300 underline">privacy@jumparena.co.uk</a> or via our website.
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
    title: "Privacy Policy | JumpArena Blog",
    description: "Read the Privacy Policy for the JumpArena blog at jumparena.co.uk, ensuring no data collection or analytics usage.",
    keywords: "privacy policy, jumparena blog, data protection, uk blog privacy",
  };
}