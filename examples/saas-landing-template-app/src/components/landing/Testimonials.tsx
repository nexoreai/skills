import { Skeleton } from "@/components/ui/skeleton"

const spotlight = {
  quote: "This is by far the most reliable agency tool I have ever used",
  name: "Customer Spotlight",
  role: "Operations Lead",
}

const testimonials = [
  {
    quote:
      "As a fast-moving design team, we needed a tool that matched our pace. From client onboarding to getting paid, this just works clean, fast, and beautifully built.",
    name: "Customer One",
    role: "Team Lead",
  },
  {
    quote:
      "We used to duct-tape tools together. Now our contracts, time tracking, and payments live in one clean system. It's everything a small team needs to stay pro.",
    name: "Customer Two",
    role: "Project Lead",
  },
  {
    quote:
      "Managing projects used to mean spreadsheets, DMs, and missed invoices. This platform keeps our workflows tight and our clients impressed.",
    name: "Customer Three",
    role: "Creative Lead",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_12px_32px_rgba(26,22,21,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
              Testimonials
            </p>
            <p className="mt-6 text-2xl font-semibold leading-snug text-[#1a1615]">
              “{spotlight.quote}”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Skeleton className="h-14 w-14 rounded-full bg-[#f1efec]" />
              <div>
                <p className="text-sm font-semibold text-[#1a1615]">
                  {spotlight.name}
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-[#757170]">
                  {spotlight.role}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_10px_28px_rgba(26,22,21,0.08)]"
              >
                <p className="text-sm leading-relaxed text-[#1a1615]">
                  “{item.quote}”
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Skeleton className="h-11 w-11 rounded-full bg-[#f1efec]" />
                  <div>
                    <p className="text-sm font-semibold text-[#1a1615]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#757170]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
