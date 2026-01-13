import { Skeleton } from "@/components/ui/skeleton"

const tags = ["Featured", "Insight", "Management", "Community"]

export default function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#614a44]">
            Insights
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
            Ideas to level-up your freelance game
          </h2>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_12px_32px_rgba(26,22,21,0.12)]">
            <div className="overflow-hidden rounded-[22px] border border-black/5 bg-white">
              <Skeleton className="h-[240px] w-full rounded-[20px] bg-[#f1efec]" />
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
              <span>Must Read</span>
              <span>Community</span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#1a1615]">
              How to build a modern studio in 2025
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#453f3d]">
              Learn how to kickstart your journey into agency ownership with our
              comprehensive guide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Skeleton className="h-12 w-12 rounded-full bg-[#f1efec]" />
              <div>
                <p className="text-sm font-semibold text-[#1a1615]">Editorial Team</p>
                <p className="text-xs text-[#757170]">Content</p>
              </div>
            </div>
          </article>
          <div className="space-y-6">
            <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(26,22,21,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
                Featured
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#453f3d]">
              Stay updated on new features and discover how others are using
              the platform.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-[#1a1615]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(26,22,21,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
                Tips & Tutorials
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#453f3d]">
              Tips, tutorials, and in-depth feature guides to inspire and enhance
              your workflow.
              </p>
              <button
                type="button"
                className="mt-5 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-[#1a1615]"
              >
                Explore library
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
