# CSS Reset Philosophy

This project uses a comprehensive modern CSS reset in `reset.scss` inspired by modern-normalize, Josh Comeau's reset, and Tailwind's preflight. Key decisions:

## Box Model & Spacing
- **Box-sizing: border-box** on all elements (including pseudo-elements) for predictable sizing.
- **Zero margins/padding** by default—spacing is opt-in via design system tokens or utility classes.

## Typography
- **Font inheritance** on all form controls (input, button, textarea, select) to ensure consistent typography.
- **Line-height inheritance** to prevent default browser line-heights from breaking vertical rhythm.
- **Font smoothing** (antialiased) for improved text rendering on macOS/iOS.
- **Headings inherit** font properties—scale them with a type system rather than relying on browser defaults.

## Media Elements
- **Block display** on images, video, svg, canvas, and picture elements.
- **max-width: 100%** to prevent overflow and make media responsive by default.

## Forms & Interactivity
- **Stripped defaults** on buttons and inputs (no borders, background, or appearance) for easier component styling.
- **Inherit color** to make form controls respect parent text color.
- **Cursor: pointer** on button elements for clearer interactivity.

## Accessibility
- **Focus-visible outline** provides a default accessible focus indicator (2px solid currentColor).
- **Reduced motion**: Aggressively disables animations and transitions for users who prefer reduced motion. This follows [web.dev's recommended approach](https://web.dev/prefers-reduced-motion/#bonus-forcing-reduced-motion-on-all-websites) for accessibility:
  - `animation-duration: 0.01ms` - Reduces animations to imperceptible duration while still firing `animationend` events
  - `animation-iteration-count: 1` - Prevents infinite loops
  - `transition-duration: 0.01ms` - Makes transitions instant
  - `scroll-behavior: auto` - Disables smooth scrolling (important vestibular trigger)
  - **Why 0.01ms instead of removing entirely**: Some functionality depends on animation events firing. Setting duration to near-zero ensures animations complete instantly without breaking event-driven code.
  - **Medical necessity**: For users with vestibular disorders, motion can cause dizziness, nausea, and migraines. Accessibility trumps aesthetics.
- **[hidden] attribute**: Uses `!important` to ensure semantic hiding always wins over utility classes.

## Lists & Tables
- **List styles removed** only when lists have a `class` attribute—preserves default bullets/numbers for semantic, unstyled lists.
- **Border-collapse** on tables with zero spacing for consistent table rendering.

## Why `!important` Is Used
1. **`[hidden]` attribute**: Guarantees semantic hiding cannot be overridden by utility classes like `.flex` or `.grid`.
2. **Reduced motion overrides**: All animation and transition properties use `!important` to ensure accessibility preferences cannot be bypassed by:
   - Inline styles
   - Higher specificity selectors
   - Third-party libraries or frameworks
   - Utility classes from CSS frameworks
   
   This is the [recommended approach from web.dev](https://web.dev/prefers-reduced-motion/#bonus-forcing-reduced-motion-on-all-websites) and ensures that users with vestibular disorders are protected regardless of how styles are authored elsewhere in the application.

## Future Considerations
- Introduce CSS custom properties (design tokens) for spacing, typography scale, and colors.
- Consider cascade layers (`@layer`) to organize reset, base, components, and utilities without relying on `!important`.
- Component-level motion handling using `prefers-reduced-motion` queries for critical animations.
