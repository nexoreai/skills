import { Skeleton } from "@/components/ui/skeleton"

export default function AboutApp() {
  return (
    <section id="about-app" className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#614a44]">
            Seamless across devices
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
            Work from anywhere,
            <br />
            stay in sync
          </h2>
        </div>
        <div className="relative mt-10 rounded-[28px] border border-black/10 bg-white p-5">
          <div className="relative overflow-hidden rounded-[22px] border border-black/5 bg-white p-4">
            <Skeleton className="h-[320px] w-full rounded-[20px] border border-black/5 bg-[#f1efec]" />
            <Skeleton className="absolute bottom-8 right-6 h-[180px] w-[38%] min-w-[180px] max-w-[320px] rounded-[20px] border border-black/5 bg-[#f7f5f3] shadow-[0_12px_32px_rgba(26,22,21,0.16)]" />
          </div>
          <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
              <span className="rounded-full bg-[#1a1615] px-4 py-2 text-xs font-semibold text-white">
                Mobile App
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-[#1a1615]">
                Web App
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
