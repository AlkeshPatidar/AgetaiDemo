import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const iconButton =
  "flex size-12 shrink-0 items-center justify-center rounded-full bg-white/16 backdrop-blur-[8px] transition-colors hover:bg-white/25";

export function TopBar() {
  return (
    <header className="flex h-20 items-center justify-between bg-black/20 px-4 sm:px-6">
      <button
        type="button"
        className="flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-brand/20 px-5 py-3 text-base font-bold tracking-[-0.112px] text-white transition-colors hover:bg-brand/30"
      >
        Upload video
        <Image src="/icons/upload-plus.svg" alt="" width={20} height={20} />
      </button>

      <div className="flex items-start gap-4">
        <button type="button" aria-label="Search" className={iconButton}>
          <Image src="/icons/search.svg" alt="" width={24} height={24} />
        </button>

        <div className="relative size-12 shrink-0">
          <button
            type="button"
            aria-label="Notifications, 2 unread"
            className={`${iconButton} absolute inset-0`}
          >
            <Image src="/icons/bell.svg" alt="" width={24} height={24} />
          </button>
          <span className="pointer-events-none absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-destructive pb-px text-xs font-semibold tracking-[-0.06px] text-white">
            2
          </span>
        </div>

        <Link
          href={siteConfig.profileHref}
          aria-label="Your profile"
          className="relative size-12 shrink-0 rounded-full"
        >
          <Image
            src="/images/avatar.png"
            alt=""
            width={48}
            height={48}
            className="size-full rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 size-3 rounded-full border-[1.5px] border-black bg-success" />
        </Link>
      </div>
    </header>
  );
}
