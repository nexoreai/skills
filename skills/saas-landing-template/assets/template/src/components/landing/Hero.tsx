import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function Hero() {
  return (
    <section id="hero" className="pt-28">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 text-center">
          <h1 className="text-balance text-[clamp(2.6rem,5vw,4.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1a1615]">
            Run your freelance business like a pro
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#453f3d] sm:text-lg">
            All-in-one platform for managing clients, projects, and payments without
            the chaos. From first contract to final invoice, we’ve got your back.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              className="h-12 rounded-full bg-[#1a1615] px-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(26,22,21,0.22)] hover:bg-[#1a1615]/90"
            >
              <Link href="#cta">Start free trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border border-black/10 bg-white px-6 text-base font-semibold text-[#1a1615] hover:bg-white"
            >
              <Link href="#features">See features</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 rounded-[32px] border border-black/10 bg-white p-3 shadow-[0_14px_42px_rgba(26,22,21,0.12)]">
          <div className="overflow-hidden rounded-[26px] border border-black/5 bg-white p-6">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-24 rounded-full" />
              <Skeleton className="h-3 w-16 rounded-full" />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_1fr]">
              <Skeleton className="h-[220px] w-full rounded-[20px] border border-black/5 bg-[#f1efec]" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-3/4 rounded-full" />
                <Skeleton className="h-4 w-2/3 rounded-full" />
                <Skeleton className="h-4 w-1/2 rounded-full" />
                <Skeleton className="mt-6 h-10 w-full rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
