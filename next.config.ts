import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ // Tes autres vibes (images, env, etc.) chill ici

  async redirects() {
    // Tes redirects normaux—intacts, no drama
    const standardRedirects = [

      {
        source: '/faqs/:slug',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/gallery/:slug',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/offers/:slug',
        destination: '/offers',
        permanent: true,
      },
      {
        source: '/demo/:slug',
        destination: '/franchise',
        permanent: true,
      },
      {
        source: '/newsletter',
        destination: '/blog',
        permanent: true,
      },
      
      {
        source: '/tv_screen',
        destination: '/activities',
        permanent: true,
      },
      {
        source: '/corporate',
        destination: '/vip-party-package',
        permanent: true,
      },
      
      {
        source: '/banner-join-now-form',
        destination: '/booking-now',
        permanent: true,
      },
      {
        source: '/fit-jump-is-amazing-what-a-work-out',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/i-never-thought-i-could-enjoy-a-class-so-much-great-atmosphere-great-session-i-am-now-addicted',
        destination: '/blog',
        permanent: true,
      },
     

      {
        source: '/halloween-at-jumparena',
        destination: '/event',
        permanent: true,
      },


      {
        source: '/select-park',
        destination: '/location',
        permanent: true,
      },
      {
        source: '/groups-parties',
        destination: '/activities/parties',
        permanent: true,
      },
     
      {
        source: '/monthly-jump-pass',
        destination: '/offers',
        permanent: true,
      },

      {
        source: '/select-waiver',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/waiver',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/whats-on',
        destination: '/event',
        permanent: true,
      },
      {
        source: '/leeds',
        destination: '/location/leeds',
        permanent: true,
      },
      {
        source: '/leeds-party-package',
        destination: '/location/leeds',
        permanent: true,
      },
      {
        source: '/halloween-at-jumparena',
        destination: '/event',
        permanent: true,
      },
      
      
      {
        source: '/terms-conditions',
        destination: '/legal/tc',
        permanent: true,
      },

      {
        source: '/black-friday',
        destination: '/offers',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2017/10/',
        destination: '/gallery',
        permanent: true,
      },
      
    ];
    
    
    return [...standardRedirects];
  },
};

export default nextConfig;