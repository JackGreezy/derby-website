import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Riley Derby',
    short_name: 'RD',
    description: 'Riley Derby - Biological Anthropology at UT Austin',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#006341',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
} 