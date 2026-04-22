interface ProfileHeaderProps {
  name: string;
  title: string;
  bio: string;
}

export function ProfileHeader({ name, title, bio }: ProfileHeaderProps) {
  return (
    <>
      <h1 className="text-red-800">{name}</h1>
      <h2>{title}</h2>
      <p>{bio}</p>
    </>
  );
}
