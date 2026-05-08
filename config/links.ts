/**
 * Static link data — will be replaced by CMS/API in the future.
 * Keeping data separate from components enables easy migration.
 */
import type { LinkItem, SocialLink } from '@/types/links';

export const primaryLinks: LinkItem[] = [
  {
    id: '1',
    title: 'Visit our website',
    url: '//ferminoscleaningservices.com',
    description: 'Check out my latest work',
    icon: 'globe',
    isActive: true,
    order: 1,
  },
  {
    id: '2',
    title: 'Free Cleaning Quote',
    url: '//ferminoscleaningservices.com/#quote',
    description: '',
    icon: 'book-open',
    isActive: true,
    order: 2,
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'facebook',
    url: '//facebook.com/ferminoscleaningservices',
    label: 'Facebook',
  },
  {
    platform: 'instagram',
    url: '//instagram.com/ferminoscleaningservices',
    label: 'Instagram',
  },
  {
    platform: 'whatsapp',
    url: '//wa.me//18568822511?text=Hello,%20I%20would%20like%20to%20request%20a%20quote.',
    label: 'WhatsApp',
  },
];
