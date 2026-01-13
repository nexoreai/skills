import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="cta" className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white px-8 py-12 shadow-[0_16px_44px_rgba(26,22,21,0.12)] sm:px-12">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#614a44]">
                Ready to get started
              </p>
              <h2 className="mt-4 text-balance text-[clamp(1.9rem,3.8vw,3.1rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
                Download the app for free. No credit card required.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                className="h-12 rounded-full bg-[#1a1615] px-6 text-base font-semibold text-white shadow-[0_12px_30px_rgba(26,22,21,0.22)] hover:bg-[#1a1615]/90"
              >
                Start free trial
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full border-black/10 bg-white px-6 text-base font-semibold text-[#1a1615]"
              >
                Contact sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
