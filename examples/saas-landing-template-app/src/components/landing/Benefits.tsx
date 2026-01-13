import { Skeleton } from "@/components/ui/skeleton"

const projectTags = ["Time tracking", "Timesheets", "Reports"]

export default function Benefits() {
  return (
    <section id="benefits" className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
              project management
            </p>
            <h2 className="mt-5 text-balance text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
              Keep every project moving forward
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#453f3d]">
              Plan, assign, and deliver your work - all in one place. With smart
              task tracking, deadlines, and real-time progress, you stay organized
              and clients stay confident.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {projectTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[#1a1615]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-4 shadow-[0_12px_32px_rgba(26,22,21,0.12)]">
            <Skeleton className="h-[320px] w-full rounded-[22px] border border-black/5 bg-[#f1efec]" />
          </div>
        </div>
      </div>
    </section>
  )
}
