import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // hide API routes from search engines
    },
    sitemap: 'https://b2brentals.netlify.app/sitemap.xml',
  };
}
