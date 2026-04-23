export const siteConfig = {
  author: {
    name: "Fermino's Cleaning Services",
    username: '@ferminoscleaningservices',
    bio: 'Cleaning Services in USA. SINCE 2014',
    avatar: '/logo-icon.png',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
  },
} as const;
export type SiteConfig = typeof siteConfig;
