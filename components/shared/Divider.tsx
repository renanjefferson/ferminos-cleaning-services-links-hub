import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  label?: string;
}

export function Divider({ className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <div className="bg-border h-px flex-1" />
        <span className="text-muted-foreground text-xs">{label}</span>
        <div className="bg-border h-px flex-1" />
      </div>
    );
  }

  return <div className={cn('bg-border h-px w-full', className)} />;
}
