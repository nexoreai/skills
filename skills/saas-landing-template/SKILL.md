---
name: saas-landing-template
description: Create a premium light-mode SaaS landing page template in Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui, matching a specific layout with pill navigation, hero + CTAs, social proof strip, device showcase, benefits, features, testimonials, pricing, blog, community, CTA, and footer. Use when users ask to scaffold or recreate this exact template layout, apply its typography/spacing/color tokens, or generate a skeletonized version without real imagery.
---

# SaaS Landing Template

## Overview

Create a clean, premium SaaS landing page template that mirrors the provided layout and spacing system while staying brand-neutral and image-free. The canonical source is the template files under `assets/template/`.

## Workflow

### 1) Scaffold the project (Bun + Next.js)

- Use `bunx --bun create-next-app@latest .` with App Router, TypeScript, Tailwind, and `src/`.
- Keep ESLint enabled. Avoid experimental flags.

### 2) Initialize shadcn/ui

- Run shadcn init and add the `button` component.
- Copy `assets/template/src/components/ui/skeleton.tsx` into the project to provide placeholders.

### 3) Apply global tokens + typography

- Replace `src/app/globals.css` with `assets/template/src/app/globals.css`.
- This sets the neutral-first palette, radii, shadows, typography scale, and the fixed background gradient.
- Keep the font-face declarations as-is, or swap to your preferred rounded sans while preserving weights 400/500/600.

### 4) Install the template structure

- Copy the following into the project:
  - `assets/template/src/app/layout.tsx`
  - `assets/template/src/app/page.tsx`
  - `assets/template/src/components/landing/*`
  - `assets/template/src/components/ui/skeleton.tsx`
- Ensure `src/lib/utils.ts` exists (standard shadcn `cn` helper). If missing, copy `assets/template/src/lib/utils.ts`.

### 5) Keep it brand-neutral

- Replace all brand references with placeholders like `Company` and `Platform`.
- Avoid any real company names, founders, or external credits.

### 6) Validate structure and accessibility

- Confirm semantic headings (`h1` then `h2` for section titles).
- Ensure button and link text is descriptive.
- Keep the nav pill and main CTAs keyboard-friendly.

## References

- For exact tokens, spacing, and skeleton sizes: `references/template-spec.md`
- For section order and layout intent: `references/section-map.md`

## Assets

- Canonical template files: `assets/template/`
