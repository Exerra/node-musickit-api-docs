// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://musickit.js.org',
  integrations: [
    starlight({
      title: 'node-musickit-api',
      description: 'A Node.js wrapper for the Apple Music API (MusicKit)',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Exerra/node-musickit-api' },
      ],
      editLink: {
        baseUrl: 'https://github.com/Exerra/node-musickit-api-docs/edit/main/',
      },
      sidebar: [
        { label: 'Getting Started', slug: 'getting-started' },
        { label: 'Quickstart', slug: 'quickstart' },
        { label: 'Search', slug: 'search' },
        {
          label: 'Resources',
          items: [
            { label: 'Overview', slug: 'resources' },
            { label: 'Songs', slug: 'resources/songs' },
            { label: 'Albums', slug: 'resources/albums' },
            { label: 'Artists', slug: 'resources/artists' },
            { label: 'Music Videos', slug: 'resources/music-videos' },
          ],
        },
        { label: 'Types', slug: 'reference/types' },
      ],
    }),
  ],
});
