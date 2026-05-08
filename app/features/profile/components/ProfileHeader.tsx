import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileHeaderProps {
  name: string;
  username?: string;
  bio?: string;
  avatarUrl?: string;
}

export function ProfileHeader({
  name,
  username,
  bio,
  avatarUrl,
}: ProfileHeaderProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex flex-col items-center gap-3 p-6 text-center">
      <Avatar className="flex h-24 w-24 items-center justify-center md:h-32 md:w-32">
        <AvatarImage src={avatarUrl} alt={name} className="object-contain" />
        <AvatarFallback className="text-lg font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        {username && (
          <h1 className="text-foreground text-2xl font-bold">{username}</h1>
        )}
        <p className="text-muted-foreground font-medium">{name}</p>

        {bio && <p className="text-muted-foreground max-w-xs">{bio}</p>}
      </div>
    </div>
  );
}
