import { MetadataRoute } from 'next';
import activitiesData from '@/data/activitiesData.json'; // Static import for activities
import eventData from '@/data/event.json'; // Static import for events
import locationData from '@/data/location.json'; // Static import for locations

export default function sitemap(): MetadataRoute.Sitemap {
  // Yo, bounce squad! Dynamic sitemap for JumpArena, pulling from JSONs for activities, events, and locations.
  // Static routes hard-coded for core pages, dynamic ones from data. Last mod: 12:25 PM CEST, 08/09/2025—fresh jumps! 🚀

  const baseUrl = 'https://jumparena.co.uk'; // Live domain
  const today = new Date('2025-09-08T12:25:00Z').toISOString(); // Today’s timestamp

  // Static routes: Core non-bouncy pages
  const staticRoutes = [
    '',
    '/about',
    '/activities',
    '/arena-rules',
    '/booking-now',
    '/contact',
    '/event',
    '/faqs',
    '/franchise',
    '/gallery',
    '/landlords',
    '/location',
    '/offers',
    '/schools',
    '/vip-party-package',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: today,
  }));

  // Dynamic activity routes: From activitiesData.json
  const activityRoutes = Object.keys(activitiesData).map(slug => ({
    url: `${baseUrl}/activities/${slug}`,
    lastModified: today,
  }));

  // Dynamic event routes: From event.json with specific dates
  const eventRoutes = eventData.events.map((event: any) => ({
    url: `${baseUrl}/event/${event.slug}`,
    lastModified: new Date(event.date).toISOString(), // Use event-specific date
  }));

  // Dynamic location routes: From location.json
  const locationRoutes = locationData.map((location: any) => ({
    url: `${baseUrl}/location/${location.slug}`,
    lastModified: today,
  }));

  // Mash 'em together like a trampoline freestyle jam
  return [...staticRoutes, ...activityRoutes, ...eventRoutes, ...locationRoutes];
}