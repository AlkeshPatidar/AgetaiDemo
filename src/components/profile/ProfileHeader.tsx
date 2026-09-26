import Image from "next/image";
import { StoryRing } from "@/components/ui/StoryRing";
import { profile, profileStories } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ShareIcon } from "./icons";

const actionButton =
  "flex flex-1 items-center justify-center rounded-full px-5 py-[11px] font-inter text-[15px] font-bold leading-5";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-[7px] whitespace-nowrap font-inter text-[15px] font-bold leading-5">
      <span className="text-[#f7f9f9]">{value}</span>
      <span className="text-white opacity-70">{label}</span>
    </div>
  );
}

function StatDivider() {
  return (
    <span aria-hidden className="flex h-[13px] w-0 items-center justify-center">
      <Image src="/icons/divider.svg" alt="" width={13} height={1} className="max-w-none rotate-90" />
    </span>
  );
}

function MetaItem({
  icon,
  label,
  isLink = false,
}: {
  icon: string;
  label: string;
  isLink?: boolean;
}) {
  return (
    <div className="flex items-start gap-[3px]">
      <span className="flex size-4 items-center justify-center">
        <Image src={icon} alt="" width={13} height={13} className="h-auto w-auto" />
      </span>
      <span
        className={cn(
          "whitespace-nowrap font-rounded text-sm",
          isLink ? "text-[#1d9bf0]" : "text-white",
        )}
      >
        {label}
      </span>
    </div>
  );
}

export function ProfileHeader() {
  const [firstLink, ...otherLinks] = profile.links;

  return (
    <section className="relative flex flex-col bg-black">
      <div className="absolute inset-x-0 top-0 h-[204px]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#fff9f9]">
          <Image
            src="/images/profile-cover.png"
            alt=""
            fill
            preload
            sizes="(min-width: 1024px) 849px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        </div>
        <div className="absolute left-[17px] top-[34px] size-[132px] overflow-hidden rounded-full border-4 border-black bg-[#fff9f9]">
          <Image
            src="/images/profile-avatar.png"
            alt={profile.name}
            fill
            sizes="132px"
            className="object-cover"
          />
          <Image
            src="/images/profile-avatar-overlay.jpg"
            alt=""
            fill
            sizes="132px"
          />
        </div>
      </div>

      <div className="relative flex h-[166px] justify-end px-4 py-3">
        <div className="flex h-fit w-full max-w-[375px] items-start gap-2.5 px-4">
          <button type="button" className={cn(actionButton, "bg-brand/60 text-white")}>
            Follow
          </button>
          <button
            type="button"
            className={cn(actionButton, "border border-[rgba(239,239,239,0.1)] bg-black/20 text-[#f7f9f9]")}
          >
            Message
          </button>
          <button
            type="button"
            className={cn(actionButton, "border border-[rgba(239,239,239,0.1)] bg-black/20 text-[#f7f9f9]")}
          >
            Gift
          </button>
        </div>
      </div>

      <div className="relative flex flex-wrap items-start justify-between gap-4 px-4 pb-4 pt-5">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <h1 className="font-inter text-xl font-bold leading-6 text-white">
              {profile.name}
            </h1>
            <Image
              src="/icons/verified.svg"
              alt="Verified"
              width={18}
              height={19}
              className="mx-[2px]"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#00e813]" />
            <span className="font-inter text-[13px] font-semibold leading-4 text-[#00e813]">
              {profile.status}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex items-center justify-center gap-[21px] rounded-full border border-[rgba(239,239,239,0.1)] bg-black/34 px-5 py-2">
            <Stat value={profile.following} label="Following" />
            <StatDivider />
            <Stat value={profile.views} label="View" />
            <StatDivider />
            <Stat value={profile.likes} label="Likes" />
          </div>
          <button
            type="button"
            aria-label="Share profile"
            className="flex size-[37px] items-center justify-center rounded-full bg-black/20 p-2 text-white"
          >
            <ShareIcon className="size-[21px]" />
          </button>
        </div>
      </div>

      <div className="relative flex flex-col gap-[9px] px-4 pb-2.5">
        <p className="font-rounded text-base text-white">{profile.bio}</p>
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2">
          <div className="flex items-start gap-[11px]">
            <span className="rounded-[27px] bg-gradient-to-r from-[rgba(195,117,255,0.2)] to-[rgba(86,0,190,0.2)] px-2.5 py-1 font-inter text-sm leading-5 text-white">
              {profile.freePlaylists}
            </span>
            <span className="rounded-[27px] bg-[rgba(38,132,252,0.2)] px-2.5 py-1 font-inter text-sm leading-5 text-white">
              {profile.paidPlaylists}
            </span>
          </div>
          <MetaItem icon="/icons/pin.svg" label={profile.location} />
          <MetaItem icon="/icons/calendar.svg" label={profile.joined} />
          <MetaItem icon="/icons/link.svg" label={firstLink} isLink />
        </div>
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-2">
          {otherLinks.map((link, i) => (
            <MetaItem key={`${link}-${i}`} icon="/icons/link.svg" label={link} isLink />
          ))}
        </div>
      </div>

      <div className="relative border-t border-[#262626] px-4 pb-3 pt-[12.5px]">
        <div className="scrollbar-none flex gap-[3px] overflow-x-auto">
          <StoryRing name="Create new" variant="compact" create />
          {profileStories.map((story) => (
            <StoryRing key={story.id} name={story.name} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
