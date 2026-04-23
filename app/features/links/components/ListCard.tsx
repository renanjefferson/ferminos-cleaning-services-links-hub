import { FiExternalLink } from 'react-icons/fi';
import { LinkItem } from '@/types/links';
import { cn } from '@/lib/utils';

interface ListCardProps {
  link: LinkItem;
}

export function ListCard({ link }: ListCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group border-border flex w-full items-center justify-between rounded-lg border',
        'bg-card hover:bg-accent p-4 transition-all hover:shadow-md',
        'focus-visible:ring-ring min-h-20 focus-visible:ring-2 focus-visible:outline-none'
      )}
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-card-foreground group-hover:text-accent-foreground text-sm font-medium">
          {link.title}
        </span>
        {link.description && (
          <span className="text-muted-foreground text-xs">
            {link.description}
          </span>
        )}
      </div>
      <FiExternalLink className="text-muted-foreground h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
