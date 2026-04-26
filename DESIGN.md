---
name: Amber Tactical Medical Response
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#050505'
  surface-container-low: '#151b2d'
  surface-container: '#201f1f'
  surface-container-high: '#282e41'
  surface-container-highest: '#33394c'
  on-surface: '#e5e2e1'
  on-surface-variant: '#94a3b8'
  primary: '#EF4444'
  on-primary: '#ffffff'
  primary-container: '#EF4444'
  on-primary-container: '#ffffff'
  secondary: '#D4AF37'
  on-secondary: '#1a1a1a'
  tertiary: '#2fd9f4'
  error: '#EF4444'
  background: '#070d1f'
  on-background: '#e5e2e1'
  outline: '#444748'
typography:
  display:
    fontFamily: Space Grotesk
  body:
    fontFamily: Lexend
  mono:
    fontFamily: Space Grotesk
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
---

## Brand & Style

The design system is engineered for high-stakes environments where split-second decisions meet premium craftsmanship. It targets elite medical response teams and tactical coordinators who require absolute clarity under pressure without sacrificing the aesthetic of a high-end command center.

The style is a hybrid of **Glassmorphism** and **Tactical Minimalism**. It utilizes deep, multi-layered dark backgrounds to minimize eye strain in low-light environments, while employing sharp, vibrant accents to signal urgency. The emotional response is one of controlled intensity—conveying that while the situation is critical, the tools at hand are precise, sophisticated, and reliable.

## Colors

The palette is anchored in **Slate 950** and a custom **Medical Navy** to provide a void-like depth that allows interface elements to pop.

- **Primary (Urgent Red - #EF4444):** The primary driver for action. Used for critical data points, active alerts, and primary call-to-action buttons. It signifies speed and immediate priority.
- **Secondary (Mission Gold - #D4AF37):** A secondary, subtle accent. Used sparingly for high-value highlights, luxury branding elements, or to denote "Optimal" status within tactical readouts.
- **Tertiary (Cyan - #2fd9f4):** Used for medical hub capacity and stable heartbeat indicators.
- **Surface Layers:** Backgrounds utilize #070d1f for the base, with #0c1324 used for elevated glass panels to maintain a professional, clinical undertone.

## Typography

This design system uses a multi-font strategy to balance geometric modernity with technical legibility.

- **Space Grotesk (Headlines & Mono Data):** Chosen for its wide apertures and "command center" aesthetic. Used for all major headings and primary KPI readouts.
- **Lexend / Inter (Body & Labels):** Provides maximum readability for dense medical data, logs, and technical descriptions.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to ensure that critical information remains in a predictable, high-speed scanning area.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

- **Base Layer:** #070d1f solid.
- **Panel Layer:** Medical Navy with a 60% opacity and a 20px backdrop blur (e.g. `.glass-panel`).
- **Border Treatment:** Elements feature a 1px inner stroke of "Urgent Red" or "White/10" to create a defined edge.
- **Glow Effects:** `.glow-red` and `.glow-gold` are used to emphasize critical states.

## Components

- **Buttons:** Primary buttons are solid "Urgent Red" with white text. 
- **Panels:** `.glass-panel` creates a frosted glass effect with a subtle border.
- **Animations:** Elements like `.heartbeat` are used to indicate active tracking or live updates.
