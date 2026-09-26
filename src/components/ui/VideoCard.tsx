import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

type VideoCardVariant = "reel" | "long";

interface VideoCardProps {
  title: string;
  views: string;
  thumbnail?: string | null;
  variant?: VideoCardVariant;
  className?: string;
  sizes?: string;
}

const overlay: Record<VideoCardVariant, string> = {
  reel: "bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,#000_99.96%)]",
  long: "bg-gradient-to-b from-transparent to-black/48",
};

export function VideoCard({
  title,
  views,
  thumbnail,
  variant = "reel",
  className,
  sizes = "(min-width: 1024px) 25vw, 50vw",
}: VideoCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col justify-between overflow-hidden p-4 text-white",
        variant === "long" && "border border-slate-border",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {thumbnail ? (
          <Image src={thumbnail} alt="" fill sizes={sizes} className="object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b4f] to-black" />
        )}
        <div className={cn("absolute inset-0", overlay[variant])} />
      </div>

      <div className="relative flex items-center gap-4">
        <div className="flex flex-1 items-center gap-2">
          <span className="rounded-full border border-white/16 bg-[#020617]/32 px-2.5 py-1 text-sm font-semibold leading-5 tracking-[-0.084px]">
            {views}
          </span>
        </div>
        <Logo size="sm" />
      </div>

      <div className="relative flex items-center justify-center gap-2.5">
        <h3 className="min-w-0 flex-1 truncate text-lg font-bold leading-6 tracking-[-0.144px]">
          {title}
        </h3>
        <div aria-hidden className="relative size-6 shrink-0">
          <Image src="/icons/loader-ring.svg" alt="" width={24} height={24} className="absolute inset-0" />
          <Image
            src="/icons/loader-arc.svg"
            alt=""
            width={12}
            height={20}
            className="absolute left-1/2 top-0 h-[85.36%] w-1/2"
          />
        </div>
      </div>
    </article>
  );
}
