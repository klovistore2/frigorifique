// app/faqs/page.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import coreData from '@/data/core.json'; // Global settings
import { Metadata } from 'next'; // For meta tags
import Script from 'next/script'; // For JSON-LD

export const generateMetadata = async (): Promise<Metadata> => {
  const { domain, ogImage, titleSuffix, language } = coreData;

  return {
    title: `FAQs${titleSuffix}`,
    description: "Get answers to common questions about JumpArena trampoline parks across the UK.",
    keywords: "jumparena faqs, trampoline park questions, uk trampoline info",
    openGraph: {
      title: `FAQs${titleSuffix}`,
      description: "Find answers to your questions about JumpArena trampoline parks across the UK.",
      url: `${domain}/faqs`,
      siteName: "JumpArena",
      images: [
        {
          url: `${domain}${ogImage}`,
          width: 1200,
          height: 630,
          alt: "JumpArena FAQs",
        },
      ],
      locale: language,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `FAQs${titleSuffix}`,
      description: "Get all your JumpArena trampoline park questions answered!",
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
      canonical: `${domain}/faqs`, // Canonical URL for SEO
    },
  };
};

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I book?",
      answer: "To book, please visit www.jumparena.co.uk or call your nearest park!",
    },
    {
      question: "What is included in the party package?",
      answer:
        "Included in the price (from £9.99 per person), you get your hours bounce, safety socks, your own dedicated party host, your own VIP party room, and food supplied from a menu chosen by you and your party.",
    },
    {
      question: "Can I pay at reception?",
      answer: "Yes, you can pay at reception, but this is subject to availability. We recommend booking online.",
    },
    {
      question: "Can I reuse / use other parks trampoline socks?",
      answer: "As long as our staff say they are acceptable grip socks they are fine to be used.",
    },
    {
      question: "Why do I need to wear jump arena socks?",
      answer: "Safety grip socks are required for hygiene but more importantly safety. They ensure that you do not slip while bouncing.",
    },
    {
      question: "How much is it to bounce?",
      answer: "Prices vary, access each site. Please click onto your preferred site.",
    },
    {
      question: "Is there anyone to ensure the safety of my children?",
      answer: "Yes, there are court marshalls on the court at all times, who are all first aid and marshall trained.",
    },
    {
      question: "What is included in the open jump?",
      answer:
        "In the open jump you have access to all parts of the park, including the foam pit, slackline, gladiator, hang tough, dodge ball court, the slam dunk court air bag and ninja warrior (features vary from park to park).",
    },
    {
      question: "Why do I have to arrive 30 minutes early?",
      answer:
        "We advise people to arrive 30 minutes early to allow time for them to check in and watch the safety briefing video, and get their socks on ready to bounce.",
    },
    {
      question: "Do you have baby changing?",
      answer: "Yes we have a baby changing facility.",
    },
    {
      question: "Can I book the whole park exclusively?",
      answer: "Yes, we do offer private hire. To find out the best rate please contact your nearest park.",
    },
    {
      question: "Where can I keep my belongings?",
      answer:
        "There are lockers on site which are refundable in case at Leeds, Cardiff and Gateshead. Non refundable locks are available at Luton.",
    },
    {
      question: "Do I need to sign a waiver every time I come?",
      answer: "No, the waiver is saved on our system for 12 months.",
    },
    {
      question: "Do I need to sign a waiver before I bounce?",
      answer: "Yes, All jumpers must have a waiver signed by a parent or legal guardian who are over the age of 18.",
    },
    {
      question: "Is there anything for adults to do while children bounce?",
      answer: "Yes, we have a café on site for parents to relax in.",
    },
    {
      question: "Can my toddler bounce outside of the designated toddler sessions?",
      answer:
        "Yes. Children between the age of 2-4 years of age are able to jump as long as they are accompanied by an adult. Outside of the designated toddler session the jump will be £10. Contact your local park for full details.",
    },
    {
      question: "What is the minimum age to bounce?",
      answer:
        "The minimum age to use our park is 2 years. We offer designated toddler sessions for children aged 2-5 at our parks (10am-11am weekdays*). Outside of the designated toddler sessions, all children under 5 must be accompanied by an adult (adult jumps for free). *Please see each park’s location page for additional afternoon and weekend toddler sessions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* FAQs Section */}
      <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">FAQs</h1>
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-700"
            >
              <AccordionTrigger className="text-lg font-semibold text-white hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* JSON-LD Schema for FAQPage */}
      <Script
        id="faqs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}