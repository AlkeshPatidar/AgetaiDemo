import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  action?: { label: string; href: string };
  className?: string;
}

export function SectionHeader({ title, action, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-4 font-medium leading-[22px] text-white",
        className,
      )}
    >
      <h2 className="text-[22px] tracking-[0.66px]">{title}</h2>
      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-lg tracking-[-0.126px] hover:underline"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
