import Link from "next/link"

import { Button } from "@/components/ui/button"

const links = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#cta" },
]

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="18" height="8" rx="3" />
    </svg>
  )
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
    >
      <path d="M5 8h14" />
      <path d="M5 16h14" />
    </svg>
  )
}

export default function Nav() {
  return (
    <header className="fixed left-1/2 top-6 z-50 w-[min(1072px,calc(100%-2rem))] -translate-x-1/2">
      <div className="rounded-full border border-black/10 bg-white px-4 py-2 shadow-[0_10px_28px_rgba(26,22,21,0.08)]">
        <div className="flex items-center justify-between gap-4">
          <Link href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1a1615]">
              <LogoMark className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold tracking-tight text-[#1a1615]">
              Company
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[#453f3d] lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:text-[#1a1615]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden h-10 rounded-full bg-[#1a1615] px-5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(26,22,21,0.22)] hover:bg-[#1a1615]/90 lg:inline-flex"
            >
              <Link href="#cta">Start free trial</Link>
            </Button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#1a1615] lg:hidden"
              aria-label="Open menu"
              type="button"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
