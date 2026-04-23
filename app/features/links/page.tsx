import { LinkItem } from '@/types/links';
import { ListCard } from './components/ListCard';

interface LinkListProps {
  links: LinkItem[];
}

export function LinkList({ links }: LinkListProps) {
  return (
    <div className="space-y-2">
      {links.map((link) => (
        <ListCard key={link.id} link={link} />
      ))}
    </div>
  );
}
