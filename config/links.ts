/**
 * Static link data — will be replaced by CMS/API in the future.
 * Keeping data separate from components enables easy migration.
 */
import type { LinkItem, SocialLink } from '@/types/links';

export const primaryLinks: LinkItem[] = [
  {
    id: '1',
    title: 'Portfolio',
    url: 'https://example.com',
    description: 'Check out my latest work',
    icon: 'globe',
    category: 'main',
    isActive: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Blog',
    url: 'https://blog.example.com',
    description: 'Read my latest articles',
    icon: 'book-open',
    category: 'main',
    isActive: true,
    order: 2,
  },
  {
    id: '3',
    title: 'Products',
    url: 'https://store.example.com',
    description: 'Browse our products',
    icon: 'shopping-bag',
    category: 'products',
    isActive: true,
    order: 3,
  },
  {
    id: '4',
    title: 'Free Resources',
    url: 'https://resources.example.com',
    description: 'Download free resources',
    icon: 'download',
    category: 'resources',
    isActive: true,
    order: 4,
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://resources.example.com',
    label: 'Facebook',
  },
  {
    platform: 'instagram',
    url: '',
    label: 'Instagram',
  },
  {
    platform: 'whatsapp',
    url: '',
    label: 'WhatsApp',
  },
];
