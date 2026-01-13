import { Skeleton } from "@/components/ui/skeleton"

export default function Community() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#614a44]">
            Community
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
            Stay in the loop
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(26,22,21,0.08)]">
            <Skeleton className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e6eef6] opacity-60" />
            <p className="text-sm text-[#453f3d]">
              Stay updated on new features and discover how others are using
              the platform.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#1a1615]">
                15.2K followers
              </span>
              <button
                type="button"
                className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-[#1a1615]"
              >
                Follow us
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(26,22,21,0.08)]">
            <p className="text-sm text-[#453f3d]">
              Tips, tutorials, and in-depth feature guides to inspire and enhance
              your workflow.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#1a1615]">
                32k subscribers
              </span>
              <button
                type="button"
                className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-[#1a1615]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
