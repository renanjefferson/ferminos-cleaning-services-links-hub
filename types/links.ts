/**
 * Domain types for the Links Hub application.
 * Shared across features, components, and services.
 */

export type LinkCategory = 'main' | 'products' | 'resources' | 'social' | 'cta';

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  description?: string;
  icon?: string;
  category: LinkCategory;
  isActive: boolean;
  order: number;
  /** Future: click count for analytics */
  clicks?: number;
  /** Future: custom thumbnail */
  thumbnail?: string;
}

export interface SocialPlatform {
  facebook: string;
  instagram: string;
  whatsapp: string;
}

export type SocialPlatformKey = keyof SocialPlatform;

export interface SocialLink {
  platform: SocialPlatformKey;
  url: string;
  label: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socialLinks: SocialLink[];
}

export interface AnalyticsEvent {
  linkId: string;
  timestamp: number;
  referrer?: string;
  userAgent?: string;
}
