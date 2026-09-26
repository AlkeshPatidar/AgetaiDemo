import Image from "next/image";
import { cn } from "@/lib/utils";

type StoryVariant = "default" | "compact";

interface StoryRingProps {
  name: string;
  variant?: StoryVariant;
  create?: boolean;
}

interface RingLayer {
  left: number;
  top: number;
  color: string;
  opacity?: number;
  src?: string;
}

interface VariantSpec {
  size: number;
  border: number;
  box: number;
  back: RingLayer;
  mid: RingLayer;
  front: Omit<RingLayer, "src">;
  fire: { src: string; width: number; height: number; left: number; top: number };
  plus: { src: string; size: number; left: number; top: number };
  labelClass: string;
  gap: number;
}

const spec = (create: boolean): Record<StoryVariant, VariantSpec> => ({
  default: {
    size: 100,
    border: 2,
    box: 123.69,
    back: { left: 0, top: 9.05, color: "#fff", opacity: 0.2, src: "/images/story-back.jpg" },
    mid: { left: create ? 1.34 : 2.34, top: 0, color: "#fff", opacity: 0.5, src: "/images/story-mid.jpg" },
    front: { left: create ? 17 : 16, top: 15, color: "#fff" },
    fire: { src: "/icons/fire.svg", width: 35, height: 34, left: 86, top: 86 },
    plus: { src: "/icons/story-plus.svg", size: 32, left: 49, top: 49 },
    labelClass: "text-base",
    gap: 10,
  },
  compact: {
    size: 57.666,
    border: 1.153,
    box: 71.327,
    back: {
      left: create ? 0 : 0.65,
      top: create ? 3.22 : 5.22,
      color: create ? "#742af4" : "#722aee",
      src: "/images/story-back.jpg",
    },
    mid: { left: create ? 0.77 : 0, top: 0, color: "#ff0004", src: "/images/story-mid.jpg" },
    front: { left: create ? 11.8 : 9.88, top: create ? 6.65 : 8.65, color: "#fff" },
    fire: { src: "/icons/fire-sm.svg", width: 20.183, height: 19.607, left: 50.24, top: 49.59 },
    plus: { src: "/icons/story-plus-sm.svg", size: 18.453, left: 28.26, top: 26.26 },
    labelClass: "text-[9.227px]",
    gap: 5.767,
  },
});

function Ring({
  layer,
  size,
  border,
  rotate,
  box,
  showImage,
}: {
  layer: RingLayer;
  size: number;
  border: number;
  rotate: number;
  box: number;
  showImage: boolean;
}) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left: layer.left, top: layer.top, width: box, height: box }}
    >
      <div style={{ transform: `rotate(${rotate}deg)` }}>
        <div
          className="relative rounded-full"
          style={{
            width: size,
            height: size,
            border: `${border}px solid ${layer.color}`,
            opacity: layer.opacity,
            boxShadow: `0 ${-0.02294 * size}px ${0.1835 * size}px rgba(0,0,0,0.25)`,
          }}
        >
          {showImage && layer.src && (
            <Image
              src={layer.src}
              alt=""
              fill
              sizes={`${Math.ceil(size)}px`}
              className="rounded-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function StoryRing({ name, variant = "default", create = false }: StoryRingProps) {
  const v = spec(create)[variant];
  const width = Math.max(v.back.left, v.mid.left) + v.box;
  const height = Math.max(v.back.top, v.mid.top) + v.box;

  return (
    <div
      className="flex shrink-0 flex-col items-center"
      style={{ gap: v.gap }}
    >
      <div className="relative" style={{ width, height }}>
        <Ring layer={v.back} size={v.size} border={v.border} box={v.box} rotate={16} showImage={!create} />
        <Ring layer={v.mid} size={v.size} border={v.border} box={v.box} rotate={-16} showImage={!create} />
        <div
          className="absolute rounded-full"
          style={{
            left: v.front.left,
            top: v.front.top,
            width: v.size,
            height: v.size,
            border: `${v.border}px solid ${v.front.color}`,
            boxShadow: `0 ${-0.02294 * v.size}px ${0.1835 * v.size}px rgba(0,0,0,0.25)`,
          }}
        >
          {!create && (
            <Image
              src="/images/story-front.jpg"
              alt=""
              fill
              sizes={`${Math.ceil(v.size)}px`}
              className="rounded-full object-cover"
            />
          )}
        </div>
        {create ? (
          <Image
            src={v.plus.src}
            alt=""
            width={v.plus.size}
            height={v.plus.size}
            className="absolute"
            style={{ left: v.plus.left, top: v.plus.top }}
          />
        ) : (
          <Image
            src={v.fire.src}
            alt=""
            width={v.fire.width}
            height={v.fire.height}
            className="absolute"
            style={{ left: v.fire.left, top: v.fire.top }}
          />
        )}
      </div>
      <p
        className={cn(
          "overflow-hidden text-ellipsis whitespace-nowrap font-montserrat font-semibold leading-[1.4] text-[#f8f8f8]",
          v.labelClass,
        )}
      >
        {name}
      </p>
    </div>
  );
}
