import Image from "next/image";
import type { Playlist } from "@/types";

export function PlaylistCard({ title, count, tint, image }: Playlist) {
  return (
    <article
      className="relative flex h-[101px] flex-col gap-0.5 overflow-hidden rounded-lg border-[0.5px] border-white/10 px-5 py-4"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(${tint}, 0.2), rgba(${tint}, 0))`,
      }}
    >
      <div className="absolute right-[35px] top-[8.26px] flex h-[112.749px] w-[106.909px] items-center justify-center">
        <div className="rotate-[21.68deg]">
          <div className="relative h-[89.784px] w-[79.352px] rounded-xl border border-white shadow-[-2px_2px_10px_0px_rgba(0,0,0,0.2)]">
            <Image
              src={image}
              alt=""
              fill
              sizes="80px"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      <h3 className="relative font-montserrat text-lg font-semibold leading-[1.4] text-[#f8f8f8]">
        {title}
      </h3>
      <p className="relative font-montserrat text-[13px] font-medium leading-[1.4] text-white">
        {count}
      </p>
    </article>
  );
}
