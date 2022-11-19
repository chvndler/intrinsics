import type * as Stitches from '@stitches/react';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } = createStitches({
  /**
   * prefix your classes with `your-brand-`
   */
  prefix: 'atlr--',
  themeMap: {
    ...defaultThemeMap
  },
  theme: {
    colors: {},
    fonts: {
      untitled: '"Inter", -apple-system, system-ui, sans-serif'
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '24px',
      7: '32px',
      8: '36px',
      9: '40px',
      10: '48px',
      11: '64px',
      12: '88px',
      13: '114px',
      14: '120px'
    },
    lineHeights: {
      1: '12px',
      2: '14px',
      3: '17px',
      4: '18px',
      5: '20px',
      6: '25px',
      7: '32px',
      8: '39px',
      9: '48px',
      10: '48px',
      12: '88px',
      13: '114px',
      14: '120px'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px'
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      4: '10px',
      5: '12px',
      6: '14px',
      round: '9999px'
    }
  },
  media: {
    /**
     * @breakpoints
     */
    xs: '(max-width: 480px)',
    sm: '(max-width: 520px)',
    md: '(max-width: 740px)',
    lg: '(max-width: 860px)',
    xl: '(max-width: 1200px)',
    xxl: '(min-width: 1201px)',

    bp1: `(min-width: 520px)`,
    bp2: `(min-width: 900px)`,
    bp3: `(min-width: 1200px)`,
    bp4: `(min-width: 1580px)`,

    b1: `(min-width: 520px)`,
    b2: `(min-width: 900px)`,
    b3: `(min-width: 1200px)`,
    b4: `(min-width: 1580px)`,

    // user preferences...
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)'
  },
  utils: {}
});

export type { VariantProps } from '@stitches/react';
export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme('dark-theme', {
  colors: {},
  utils: {}
});