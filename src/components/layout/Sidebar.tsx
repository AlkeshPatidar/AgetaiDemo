"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function isNavItemActive(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith(siteConfig.profileHref);
  }

  return href !== "#" && pathname.startsWith(href);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-20 bg-[rgba(15,15,15,0.2)] backdrop-blur-sm md:block">
      <div className="flex flex-col items-center gap-8 px-4 pt-6">
        <Logo size="md" />
        <nav aria-label="Main" className="flex flex-col gap-4">
          {siteConfig.nav.map((item) => {
            const isActive = isNavItemActive(item.href, pathname);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex size-12 items-center justify-center rounded-full transition-colors hover:bg-white/10",
                  isActive && "bg-white/10",
                )}
              >
                <Image src={item.icon} alt="" width={24} height={24} />
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
