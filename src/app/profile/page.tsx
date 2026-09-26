import type { Metadata } from "next";
import { ProfileAbout } from "@/components/profile/ProfileAbout";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileTabs } from "@/components/profile/ProfileTabs";

export const metadata: Metadata = {
  title: "Profile | Demo",
};

export default function ProfilePage() {
  return (
    <div className="relative bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-[640px] w-full max-w-[820px] bg-gradient-to-r from-[#171717] to-transparent opacity-60 blur-[120px]"
      />
      <div className="relative grid lg:grid-cols-[minmax(0,1fr)_436px]">
        <div className="min-w-0 border-white/15 lg:border-r">
          <ProfileHeader />
          <ProfileTabs />
        </div>
        <ProfileAbout />
      </div>
    </div>
  );
}
