---
name: Tactical Medical Response
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#e4beba'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#ab8986'
  outline-variant: '#5b403e'
  surface-tint: '#ffb3ad'
  primary: '#ffb3ad'
  on-primary: '#68000a'
  primary-container: '#ff5451'
  on-primary-container: '#5c0008'
  inverse-primary: '#b91a24'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#8990a8'
  on-tertiary-container: '#22293d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930013'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  h1:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin: 40px
  container-max: 1440px
---

## Brand & Style

The design system is engineered for high-stakes environments where split-second decisions meet premium craftsmanship. It targets elite medical response teams and tactical coordinators who require absolute clarity under pressure without sacrificing the aesthetic of a high-end command center.

The style is a hybrid of **Glassmorphism** and **Tactical Minimalism**. It utilizes deep, multi-layered dark backgrounds to minimize eye strain in low-light environments, while employing sharp, vibrant accents to signal urgency. The emotional response is one of controlled intensity—conveying that while the situation is critical, the tools at hand are precise, sophisticated, and reliable.

## Colors

The palette is anchored in **Slate 950** and a custom **Medical Navy** to provide a void-like depth that allows interface elements to pop. 

- **Urgent Red (#EF4444):** The primary driver for action. Used for critical data points, active alerts, and primary call-to-action buttons. It signifies speed and immediate priority.
- **Mission Gold (#D4AF37):** A secondary, subtle accent. Used sparingly for high-value highlights, luxury branding elements, or to denote "Optimal" status within tactical readouts.
- **Surface Layers:** Backgrounds utilize #020617 (Slate 950) for the base, with #0B1120 (Medical Navy) used for elevated glass panels to maintain a professional, clinical undertone.

## Typography

This design system uses a dual-font strategy to balance geometric modernity with technical legibility.

- **Outfit (Headlines):** Chosen for its wide, circular apertures and "command center" aesthetic. It should be used for all major headings and primary KPI readouts.
- **Inter (Body & Labels):** Provides maximum readability for dense medical data, logs, and technical descriptions. 

All labels should be rendered in Inter with increased letter spacing when in uppercase to mimic tactical instrument panels.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to ensure that critical information remains in a predictable, high-speed scanning area. 

- **Grid:** A 12-column grid with generous 24px gutters.
- **Rhythm:** A 4px baseline shift is used to align all elements.
- **Density:** High-density information is grouped into modular "pods" or cards, separated by wide margins (40px) to prevent visual clutter during emergency use.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layering** rather than traditional shadows.

- **Base Layer:** Slate 950 (#020617) solid.
- **Panel Layer:** Medical Navy (#0B1120) with a 60% opacity and a 20px backdrop blur.
- **Border Treatment:** Elements feature a 1px inner stroke of "Urgent Red" at 10% opacity to create a "glowing wireframe" effect.
- **Interaction:** Upon hover, the backdrop blur increases and the gold accent is used as a hairline border (0.5px) to signify focus.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a precision-engineered look that feels more technical and "milspec" than fully rounded alternatives. 

- **Buttons:** Small corner radius (4px) to maintain a serious, tactical silhouette.
- **Cards:** Slightly larger radius (8px) for container shells.
- **Icons:** Must use consistent stroke weights (2px) with sharp joins to match the Outfit typeface.

## Components

- **Buttons:** Primary buttons are solid "Urgent Red" with white text. Secondary buttons are "Medical Navy" with a 1px "Gold" border.
- **Chips/Status Tags:** Use a "Glow" style—semi-transparent background with high-saturation text. Red for "Critical," Gold for "Priority," and Slate for "Standby."
- **Input Fields:** Dark backgrounds with a bottom-only 2px border that turns "Urgent Red" on focus.
- **Tactical Cards:** Must include a glassmorphic background and a subtle top-left "Gold" corner accent to denote premium status.
- **Data Visualizations:** Line charts should use "Urgent Red" for the data path with a "Gold" gradient fill beneath the line to highlight intensity.