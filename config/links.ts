/**
 * Static link data — will be replaced by CMS/API in the future.
 * Keeping data separate from components enables easy migration.
 */
import type { LinkItem, SocialLink } from '@/types/links';

export const primaryLinks: LinkItem[] = [
  {
    id: '1',
    title: 'Visit our website',
    url: 'https://example.com',
    description: 'Check out my latest work',
    icon: 'globe',
    isActive: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Free Cleaning Quote',
    url: 'https://blog.example.com/contact',
    description: '',
    icon: 'book-open',
    isActive: true,
    order: 2,
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
