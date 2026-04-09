# Project Guidelines for Claude

## 1. Svelte 5 — Always Use Runes

This project uses **Svelte 5**. Always use runes; never use legacy stores.

- Use `$state`, `$derived`, `$effect`, `$props`, etc.
- Replace any `$app/stores` imports with `$app/state`:
  ```ts
  // ❌ Old
  import { page } from '$app/stores';
  // ✅ New
  import { page } from '$app/state';
  ```
- Use `$props()` for component props, not `export let`.
- Prefer `$derived` over `$derived.by` for simple expressions.
- Snippets replace slots — use `{#snippet}` and `{@render}`.

---

## 2. TailwindCSS V4

This project uses **Tailwind CSS v4**. There is no `tailwind.config.ts`.

All configuration lives in `src/layout.css`:

```css
@import "tailwindcss";

@theme {
  --color-brand-50: oklch(97% 0.01 250);
  --color-brand-500: oklch(55% 0.2 250);
  --font-sans: 'Inter', system-ui;
  --font-display: 'Cabinet Grotesk', system-ui;
  --radius-card: 0.75rem;
}
```

Key points:
- `--font-sans` is applied automatically to `body`.
- Custom tokens are used with standard utility classes: `bg-brand-500`, `text-brand-50`, `rounded-card`, `font-display`.
- Use `@layer utilities` or `@utility` for custom utility classes.
- **Always write thoughtful, well-composed Tailwind** — proper spacing, responsive variants, dark mode support.

---

## 3. Icons — `@lucide/svelte`

`@lucide/svelte` is installed. Always use **deep imports** for optimal tree-shaking:

```ts
// ❌ Slow
import { Heart } from '@lucide/svelte';
// ✅ Fast
import HeartIcon from '@lucide/svelte/icons/heart';
```

Pass `class` props as needed:
```svelte
<HeartIcon class="text-red-500 size-5" />
```

---

## 4. Fonts — Use Fontsource, Not Google Fonts

Never import from Google Fonts. Install via **fontsource**:

```bash
pnpm add @fontsource-variable/inter
```

Then import in your CSS entry point:
```css
@import '@fontsource-variable/inter';
```

Or in a layout/root component:
```ts
import '@fontsource-variable/inter';
```

Prefer **variable fonts** (`@fontsource-variable/...`) when available — they're smaller and more flexible.

---

## 5. Package Manager — `pnpm` Only

Always use **`pnpm`**. Never use `npm` or `yarn`.

```bash
pnpm add <package>
pnpm add -D <package>
pnpm remove <package>
pnpm install
```

---

## 6. TypeScript

- Always use TypeScript. Avoid `any` — use `unknown` and narrow types properly.
- Type component props explicitly via `$props()`:
  ```ts
  const { label, onClick }: { label: string; onClick: () => void } = $props();
  ```
- Use `satisfies` over `as` for type assertions where possible.

---

## 8. Component Patterns

Prefer **composition over configuration**. Keep components small and focused.

```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children, class: className = '' }: {
    children: Snippet;
    class?: string;
  } = $props();
</script>

<div class="rounded-card p-4 {className}">
  {@render children()}
</div>
```

---

## 9. Accessibility

- Always include `alt` text on images.
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, `<article>`).
- Ensure sufficient color contrast.
- Interactive elements must be keyboard-navigable.
- Use `aria-*` attributes when semantic HTML isn't enough.

---

## 10. Performance Habits

- Lazy-load heavy components with `{#await import(...)}` where appropriate.
- Avoid inline `$effect` for things expressible as `$derived`.
- Keep reactivity granular — don't put large object trees in `$state` unnecessarily.
