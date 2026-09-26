import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({ name, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-lg font-semibold text-background",
        className,
      )}
      aria-hidden="true"
    >
      {getInitials(name)}
    </div>
  );
}
