# Template Specification

## Layout + Grid

- Global container: `mx-auto w-full max-w-[1072px] px-6`
- Main stack: `pt-24 pb-24 gap-8`
- Section spacing: `py-16` (hero uses `pt-28`, logos uses `py-8`)
- Nav width: `w-[min(1072px,calc(100%-2rem))]` and fixed `top-6`
- Two-column sections:
  - Benefits: `lg:grid-cols-[1.1fr_0.9fr]`
  - Finance: `lg:grid-cols-[0.9fr_1.1fr]`

## Typography Scale

- H1 (hero): `text-[clamp(2.6rem,5vw,4.4rem)]`, `leading-[1.08]`, `tracking-[-0.03em]`, `font-semibold`
- H2 (sections): `text-[clamp(2rem,4vw,3.3rem)]`, `leading-tight`, `tracking-[-0.03em]`, `font-semibold`
- Eyebrow label: `text-xs`, `font-semibold`, `uppercase`, `tracking-[0.2em-0.24em]`
- Body copy: `text-base` / `text-sm`, `leading-relaxed`

## Color Tokens (from globals.css)

- Background: `#f9f8f8`
- Foreground: `#1a1615`
- Muted foreground: `#453f3d`
- Accent: `#e2ecf5`
- Ring: `#9cc1e7`
- Border: `#e4e2e2`

### Fixed Gradient Background

Use a fixed pseudo-element:

```
background-image: linear-gradient(
  #fafafa 0%,
  #f9f8f8 36%,
  #f4f1ee 45% 51%,
  #e2ecf6 73%,
  #a7cbf2 125%
);
```

## Radii + Shadows

- Base radius: `--radius: 1.5rem`
- Common card radius: `rounded-[24px]`, `rounded-[28px]`, `rounded-[32px]`
- Primary card shadow: `shadow-[0_12px_32px_rgba(26,22,21,0.12)]`
- Secondary card shadow: `shadow-[0_10px_28px_rgba(26,22,21,0.08)]`
- CTA card shadow: `shadow-[0_16px_44px_rgba(26,22,21,0.12)]`
- Button shadow: `shadow-[0_12px_30px_rgba(26,22,21,0.22)]`

## Skeleton Placeholders

- Hero mockup: container `p-6` with a large block `h-[220px]` and stacked lines + pill
- Device mockup: web frame `h-[320px]`, mobile overlay `h-[180px]`
- Feature image: `h-48` block with rounded corners
- Testimonial avatars: `h-14 w-14` and `h-11 w-11` circles
- Blog image: `h-[240px]` block
- Logos: `h-8 w-8` circles in a 40px container

Use `bg-[#f1efec]` for placeholder fills, and keep borders subtle (`border-black/5`).
