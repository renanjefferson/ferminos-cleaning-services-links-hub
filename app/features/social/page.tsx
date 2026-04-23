'use client';

import { FiFacebook, FiInstagram, FiMessageCircle } from "react-icons/fi";
import type { SocialLink, SocialPlatformKey } from '@/types/links';
import { cn } from '@/lib/utils';

const iconMap: Record<
  SocialPlatformKey,
  React.ComponentType<{ className?: string }>
> = {
  facebook: FiFacebook,
  instagram: FiInstagram,
  whatsapp: FiMessageCircle,
};

interface SocialLinksBarProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinksBar({ links, className }: SocialLinksBarProps) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      {links.map((link) => {
        const Icon = iconMap[link.platform];
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring rounded-full p-2 transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
