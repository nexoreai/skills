import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#1a1615]">
                Co
              </span>
              <span className="text-sm font-semibold text-[#1a1615]">
                Company
              </span>
            </div>
            <p className="max-w-sm text-sm text-[#453f3d]">
              A calm, modern workspace for teams who want clarity across projects,
              people, and payments.
            </p>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="h-10 rounded-full border-black/10 bg-white px-4 text-xs font-semibold text-[#1a1615]"
              >
                Community
              </Button>
              <Button
                variant="outline"
                className="h-10 rounded-full border-black/10 bg-white px-4 text-xs font-semibold text-[#1a1615]"
              >
                Updates
              </Button>
            </div>
          </div>
          <div className="space-y-3 text-sm text-[#453f3d]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
              Pages
            </p>
            <Link href="#hero" className="block hover:text-[#1a1615]">
              Home
            </Link>
            <Link href="#features" className="block hover:text-[#1a1615]">
              Features
            </Link>
            <Link href="#pricing" className="block hover:text-[#1a1615]">
              Pricing
            </Link>
            <Link href="#blog" className="block hover:text-[#1a1615]">
              Blog
            </Link>
          </div>
          <div className="space-y-3 text-sm text-[#453f3d]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
              information
            </p>
            <Link href="#cta" className="block hover:text-[#1a1615]">
              Contact
            </Link>
            <Link href="/privacy-policy" className="block hover:text-[#1a1615]">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="block hover:text-[#1a1615]">
              Terms of use
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-[#757170]">
          <p>© 2025 Company. All rights reserved.</p>
          <span>Made for modern teams.</span>
        </div>
      </div>
    </footer>
  )
}
