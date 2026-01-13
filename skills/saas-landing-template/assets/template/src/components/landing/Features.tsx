import { Skeleton } from "@/components/ui/skeleton"

const integrationLogos = [
  "Integration 01",
  "Integration 02",
  "Integration 03",
  "Integration 04",
  "Integration 05",
  "Integration 06",
  "Integration 07",
  "Integration 08",
]

const secondaryFeatures = [
  "Set your language, currency, time, and date preferences for a seamless experience that feels truly local.",
  "Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar.",
]

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#614a44]">
            features
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.3rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
            Built for freelancers,
            <br />
            powered by simplicity
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_12px_32px_rgba(26,22,21,0.12)]">
            <Skeleton className="h-12 w-32 rounded-full bg-[#f1efec]" />
            <h3 className="mt-6 text-lg font-semibold text-[#1a1615]">
              Personalize every detail
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#453f3d]">
              From layout and menus to colors and density, the workspace feels
              tuned to your team.
            </p>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_12px_32px_rgba(26,22,21,0.12)]">
            <h3 className="text-lg font-semibold text-[#1a1615]">
              Seamless integrations
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#453f3d]">
              Plug the platform into the tools you love. Set up automations, sync
              your data, and make your systems work smarter together.
            </p>
            <div className="mt-5 grid grid-cols-4 gap-3">
              {integrationLogos.map((logo) => (
                <div
                  key={logo}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
                >
                  <Skeleton className="h-6 w-6 rounded-full bg-[#f1efec]" />
                  <span className="sr-only">{logo}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_12px_32px_rgba(26,22,21,0.12)]">
            <div className="overflow-hidden rounded-[20px] border border-black/5 bg-white">
              <Skeleton className="h-48 w-full rounded-[18px] bg-[#f1efec]" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-[#1a1615]">
              Keep every conversation in sync
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#453f3d]">
              Use comments, messages, and project chats to stay on the same page.
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryFeatures.map((copy) => (
            <div
              key={copy}
              className="rounded-[24px] border border-black/10 bg-white p-6 text-sm leading-relaxed text-[#453f3d] shadow-[0_12px_30px_rgba(26,22,21,0.08)]"
            >
              {copy}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
