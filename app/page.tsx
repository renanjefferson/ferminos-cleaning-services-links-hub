'use client';

import { Divider } from '@/components/shared/Divider';
import { ProfileHeader } from './features/profile/page';
import { SocialLinksBar } from './features/social/page';
import { siteConfig } from '@/config/site';
import { primaryLinks, socialLinks } from '@/config/links';
import { LinkList } from './features/links/page';

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black/20 backdrop-blur-md" />
      <section className="sm:pt-10">
        <div className="relative mx-auto min-h-lvh max-w-xl bg-white shadow-[0_24px_32px_0px_rgba(0,0,0,0.15)] sm:rounded-tl-3xl sm:rounded-tr-3xl">
          <div className="absolute h-full w-full sm:[clip-path:inset(0px_calc(50%_-_min(50%,_290px))_0px_calc(50%_-_min(50%,_290px))_round_24px_24px_0_0)]">
            <>
              <ProfileHeader
                name={siteConfig.author.name}
                username={siteConfig.author.username}
                bio={siteConfig.author.bio}
                avatarUrl={siteConfig.author.avatar}
              />

              {/* Social Links */}
              <div className="space-y-2 px-6">
                <Divider />
                <div className="relative z-10 py-6">
                  <SocialLinksBar links={socialLinks} />
                </div>
              </div>

              {/* List Links */}
              <div className="relative z-10 px-6">
                <LinkList links={primaryLinks} />
              </div>

              <div className="relative">
                <div className="fixed top-[-5vh] left-[-5vw] h-[110dvh] w-[110vw] bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat opacity-25 blur-[50px]"></div>
              </div>
            </>
          </div>
        </div>
      </section>
    </>
  );
}
