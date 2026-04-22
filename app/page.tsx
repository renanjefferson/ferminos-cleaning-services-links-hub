import { ProfileHeader } from "./features/profile/page";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section>
      <div>
        <ProfileHeader
          name={siteConfig.author.name}
          title={siteConfig.author.title}
          bio={siteConfig.author.bio}
        />
      </div>
    </section>
  );
}
