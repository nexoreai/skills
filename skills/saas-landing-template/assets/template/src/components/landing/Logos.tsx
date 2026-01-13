import { Skeleton } from "@/components/ui/skeleton"

const logos = [
  "Company 01",
  "Company 02",
  "Company 03",
  "Company 04",
  "Company 05",
  "Company 06",
  "Company 07",
  "Company 08",
]

export default function Logos() {
  return (
    <section className="py-8">
      <div className="mx-auto w-full max-w-[1072px] px-6">
        <p className="text-center text-sm text-[#453f3d]">
          Trusted by teams of every size and shape
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-10 w-10 items-center justify-center opacity-70"
            >
              <Skeleton className="h-8 w-8 rounded-full bg-[#f1efec]" />
              <span className="sr-only">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
