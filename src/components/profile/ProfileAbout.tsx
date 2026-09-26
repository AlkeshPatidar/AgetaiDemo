import type { ComponentType, SVGProps } from "react";
import { profileStats, videoCategories } from "@/data/profile";
import { BarChartIcon, EyeIcon, HeartIcon, ShareIcon, VideoIcon } from "./icons";

const statIcons: Record<
  (typeof profileStats)[number]["id"],
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  views: BarChartIcon,
  likes: HeartIcon,
  visits: EyeIcon,
  shares: ShareIcon,
  videos: VideoIcon,
};

export function ProfileAbout() {
  return (
    <aside className="flex flex-col gap-12 p-6">
      <section className="flex flex-col gap-4">
        <h2 className="text-[22px] font-bold leading-[22px] tracking-[0.66px] text-white">
          About Your Profile
        </h2>
        <ul className="grid grid-cols-2 gap-4">
          {profileStats.map((stat) => {
            const StatIcon = statIcons[stat.id];

            return (
              <li
                key={stat.id}
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-[15px] py-2 font-inter text-[15px] leading-5 text-white"
              >
                <StatIcon className="size-6 shrink-0" />
                <span className="font-semibold">{stat.value}</span>
                <span className="font-bold">{stat.label}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-[22px] font-bold leading-[22px] tracking-[0.66px] text-white">
          Your videos Categories
        </h2>
        <ul className="flex flex-wrap gap-2">
          {videoCategories.map((category) => (
            <li
              key={category}
              className="rounded-xl border border-brand/40 bg-[#170a45] px-3 py-2 text-sm font-semibold leading-5 tracking-[-0.084px] text-white"
            >
              {category}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
