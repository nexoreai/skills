import Link from "next/link"

import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$87/mo",
    description: "For solo use with light needs.",
    features: ["Unlimited projects", "Unlimited clients", "iOS & Andriod app"],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "$189/mo",
    description: "For pro use with light needs.",
    badge: "Save 20%",
    features: [
      "Everything in Basic",
      "Invoices & payments",
      "Expense tracking",
      "Income tracking",
      "Scheduling",
    ],
    cta: "Get started",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Flexible",
    description: "For team use with light needs.",
    features: [
      "Everything in Premium",
      "Custom data import",
      "Advanced onboarding",
      "CRM integration",
    ],
    cta: "Contact sales",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#614a44]">
            pricing
          </p>
          <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-tight tracking-[-0.03em] text-[#1a1615]">
            Simple plans
            <br />
            for serious work
          </h2>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-black/10 bg-white p-1">
            <button
              className="rounded-full bg-[#1a1615] px-4 py-2 text-xs font-semibold text-white"
              type="button"
            >
              Annually
            </button>
            <button
              className="rounded-full px-4 py-2 text-xs font-semibold text-[#1a1615]"
              type="button"
            >
              Monthly
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_12px_32px_rgba(26,22,21,0.12)] ${
                plan.highlight ? "ring-1 ring-black/20" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#1a1615]">
                  {plan.name}
                </p>
                {plan.badge ? (
                  <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-[#614a44]">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-5 text-3xl font-semibold text-[#1a1615]">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-[#453f3d]">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#453f3d]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1a1615]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.highlight ? "default" : "outline"}
                className={`mt-8 h-11 w-full rounded-full ${
                  plan.highlight
                    ? "bg-[#1a1615] text-white hover:bg-[#1a1615]/90"
                    : "border-black/10 bg-white text-[#1a1615]"
                }`}
              >
                <Link href="#cta">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
