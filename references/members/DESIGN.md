---
name: Elite Clinical Interface
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5b403e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#8f6f6d'
  outline-variant: '#e4beba'
  surface-tint: '#b91a24'
  primary: '#b61722'
  on-primary: '#ffffff'
  primary-container: '#da3437'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3ad'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#595c5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#727577'
  on-tertiary-container: '#fbfdff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad7'
  primary-fixed-dim: '#ffb3ad'
  on-primary-fixed: '#410004'
  on-primary-fixed-variant: '#930013'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is engineered for high-stakes, VIP emergency medical environments. The personality is "Clinical Excellence meets Concierge Luxury"—combining the sterile precision of a world-class surgical suite with the refined hospitality of a private jet terminal. 

The aesthetic leverages **Modern Minimalism** with a focus on extreme clarity and rapid cognition. It prioritizes high-legibility surfaces and a "subtractive" design philosophy where every element serves a critical functional purpose. The emotional response is one of absolute calm, immediate trust, and elite responsiveness.

## Colors

The palette is anchored by **Medical White (#FFFFFF)** and **Ice Slate (#F8FAFC)** to create a clean, sterile foundation that reduces visual noise. **Professional Slate (#475569)** provides high-contrast grounding for secondary actions and primary text, ensuring sophisticated legibility. 

**Tactical Red (#EF4444)** is reserved strictly for primary emergency actions, critical alerts, and vital indicators. This "signal" color must be used sparingly to maintain its urgency and ensure that in moments of crisis, the eye is instantly drawn to the correct interaction point.

## Typography

This design system utilizes a dual-font strategy. **Outfit** serves as the primary headline typeface; its geometric purity and modern proportions evoke a sense of high-tech precision and premium service. **Inter** is the workhorse for all body copy and data-heavy clinical views, chosen for its exceptional legibility in high-stress, rapid-scanning scenarios.

All headers use tighter letter spacing to maintain a "locked-in" professional look. Labels and captions utilize Inter’s medium and bold weights to ensure hierarchy is maintained even at small scales.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** on desktop (1280px max-width) and a **Fluid Grid** on mobile devices. The rhythm is based on a strict 4px baseline grid to ensure mathematical harmony across all components. 

Generous whitespace (padding-lg) is used to separate distinct medical data points, preventing cognitive overload. Margins are intentionally wide (24px) to frame the content, reinforcing the premium, concierge feel by allowing the interface to "breathe."

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines**. Surfaces do not use aggressive shadows; instead, they rely on subtle variations between White (#FFFFFF) and Ice Slate (#F8FAFC) to indicate hierarchy. 

When elevation is required for floating elements (like emergency modals), a "Soft Ambient" shadow is used: a very low-opacity slate tint with a large blur radius to simulate a gentle lift without breaking the clean, clinical aesthetic. Subtle 1px borders in Slate-100 are used to define container boundaries on white backgrounds.

## Shapes

The shape language is defined by **Rounded-XL (1.5rem)** corners. This high degree of rounding softens the clinical nature of the app, moving it away from "cold institutionalism" toward "approachable concierge luxury." 

Buttons, cards, and input fields all share this consistent radius, creating a cohesive visual thread. Small elements like chips or badges may utilize a full pill-shape to distinguish them from interactive containers.

## Components

### Buttons
Primary action buttons use **Tactical Red (#EF4444)** with white text and `rounded-xl` corners. Secondary buttons use the Professional Slate outline or subtle Ice Slate fills.

### Cards & Containers
Medical data is housed in cards with #FFFFFF backgrounds and 1px #E2E8F0 borders. The `rounded-xl` corner is mandatory for all primary containers to maintain the elite aesthetic.

### Input Fields
Inputs feature a #F8FAFC background and a subtle slate border. On focus, the border transitions to Professional Slate. Labels are always positioned above the field for maximum legibility.

### Medical Status Chips
Small, high-contrast badges used to indicate patient status or triage level. These use the color-coded system (Red for Critical, Slate for Stable) with semi-transparent backgrounds to keep the text legible.

### Vital Sign Monitors
Specialized components that use a monospace variant of Inter for numerical data, ensuring that changing numbers don't cause layout shift during live monitoring.