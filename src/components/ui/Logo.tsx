import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size: "sm" | "md";
  className?: string;
}

const variants = {
  sm: {
    box: "size-8",
    src: "/icons/logo-card.svg",
    image: 48,
    offset: "-left-2 -top-1",
  },
  md: {
    box: "size-10",
    src: "/icons/logo.svg",
    image: 60,
    offset: "-left-2.5 -top-[5px]",
  },
} as const;

export function Logo({ size, className }: LogoProps) {
  const variant = variants[size];

  return (
    <div className={cn("relative shrink-0", variant.box, className)}>
      <Image
        src={variant.src}
        alt="Logo"
        width={variant.image}
        height={variant.image}
        className={cn("absolute max-w-none", variant.offset)}
      />
    </div>
  );
}
