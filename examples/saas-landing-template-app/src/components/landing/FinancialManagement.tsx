import { Skeleton } from "@/components/ui/skeleton"

const financeTags = ["Invoicing", "Budgets", "Forecasting"]

export default function FinancialManagement() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 lg:order-1 rounded-[28px] border border-black/10 bg-white p-4 shadow-[0_12px_32px_rgba(26,22,21,0.12)]">
            <Skeleton className="h-[320px] w-full rounded-[22px] border border-black/5 bg-[#f1efec]" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
              financial management
            </p>
            <h2 className="mt-5 text-balance text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
              Track income, get paid, stress less
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#453f3d]">
              Create consistent invoices, log expenses, and keep tabs on your
              earnings. Whether you bill hourly or per project, everything’s
              automated and tax-friendly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {financeTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[#1a1615]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
