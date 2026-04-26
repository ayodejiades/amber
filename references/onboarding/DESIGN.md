---
name: Amber Tactical Medical
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5b403e'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#8f6f6d'
  outline-variant: '#e4beba'
  surface-tint: '#b91a24'
  primary: '#b61722'
  on-primary: '#ffffff'
  primary-container: '#da3437'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3ad'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#006765'
  on-tertiary: '#ffffff'
  tertiary-container: '#008280'
  on-tertiary-container: '#f3fffd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930013'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#87f4f0'
  tertiary-fixed-dim: '#69d8d4'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504e'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  status-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is engineered to convey immediate authority, clinical precision, and premium reliability. It operates at the intersection of high-end concierge services and emergency medical response. The visual language is rooted in **Modern Corporate** aesthetics with a **Tactical** edge, emphasizing clarity over decoration. 

The target audience includes high-net-worth individuals and premium healthcare providers who require a seamless, "no-fail" interface. The UI should evoke a sense of calm under pressure, utilizing expansive white space to reduce cognitive load while employing high-contrast accents to guide critical decision-making.

## Colors
The palette is dominated by a sterile, high-grade white and gallery grays to establish a "clean room" feel. 

- **Tactical Red (#EF4444):** Reserved exclusively for primary calls to action, emergency status, and "Request Ambulance" triggers. Its use must be sparse to maintain its psychological impact.
- **Medical Slate (#64748B):** Used for administrative data, navigation icons, and secondary actions. It provides a grounding, professional contrast to the pure white background.
- **Neutral Scale:** Utilizes a range of cool-toned grays to define boundaries and hierarchy without introducing visual noise.

## Typography
This design system utilizes **Inter** for its geometric clarity and exceptional readability at small sizes—essential for medical data displays. 

Headlines use tighter letter-spacing and heavier weights to feel "engineered" and assertive. Body text prioritizes generous line heights for legibility during high-stress interactions. Labels and status indicators often utilize uppercase styling with increased letter spacing to differentiate them from interactive data points.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop and a fluid, margin-dependent model on mobile devices. A strict 8px spatial scale governs all padding and margins to ensure mathematical harmony. 

Information density is kept low on primary action screens (like the booking flow) to ensure focus, while administrative dashboards utilize a more compressed grid to show comprehensive medical data at a glance.

## Elevation & Depth
Depth is conveyed through **Ambient Shadows** and tonal layering. This design system avoids heavy gradients or glassmorphism to maintain its clinical integrity.

- **Level 1 (Cards):** Subsurface depth using a very soft, large-radius shadow (Blur: 15px, Opacity: 4%, Color: #0F172A).
- **Level 2 (Active Elements/Modals):** Increased elevation to draw focus (Blur: 30px, Opacity: 8%, Color: #0F172A).
- **Interactive States:** On hover, elements slightly lift (reduce shadow blur, increase opacity) to provide tactile feedback.

## Shapes
The shape language is **Soft (0.25rem - 0.75rem)**. This provides a balance between the "sharp" precision of medical equipment and the "soft" approachability of a luxury service. 

- **Standard Buttons:** 0.25rem (4px) for a crisp, technical look.
- **Cards & Containers:** 0.5rem (8px) to soften the overall interface.
- **Inputs:** 0.25rem (4px) to maintain a sense of structural rigidity.

## Components
- **Buttons:** Primary buttons are solid Tactical Red with white text. Secondary buttons use a Slate outline. All buttons use a fixed height (48px or 56px) to ensure a large hit area.
- **Status Badges:** High-contrast capsules. "Emergency" badges use Red background with White text; "Standby" uses Slate background with White text.
- **Cards:** White backgrounds (#FFFFFF) with a 1px border in Gallery Gray (#F8FAFC) and a Level 1 shadow.
- **Input Fields:** Thick 2px borders when focused in Medical Slate. Labels are always persistent (not floating) to ensure the user never loses context.
- **Additional Components:** 
    - **Progress Steppers:** Thin lines with high-contrast numbered nodes to track ambulance arrival.
    - **Live Map Interface:** Clean, desaturated map tiles with high-vibrancy Red "Amber" pins.
    - **Vitals Monitor:** Small, sparkline-style data visualizations for real-time patient updates.