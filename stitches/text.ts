// text.ts (separate file for text types and sizes)

export type ThemeTextSizes =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12'

export const pxTextSizes: Record<ThemeTextSizes, number> = {
  '01': 12,
  '02': 14,
  '03': 16,
  '04': 18,
  '05': 20,
  '06': 24,
  '07': 28,
  '08': 32,
  '09': 36,
  '10': 40,
  '11': 48,
  '12': 56,
}

export const textSizes = {
  xsMin: pxTextSizes['01'],
  xsMax: pxTextSizes['01'],
  smMin: pxTextSizes['02'],
  smMax: pxTextSizes['02'],
  mdMin: pxTextSizes['03'],
  mdMax: pxTextSizes['03'],
  lgMin: pxTextSizes['05'],
  lgMax: pxTextSizes['05'],
  xlMin: pxTextSizes['06'],
  xlMax: pxTextSizes['06'],
  h5Min: pxTextSizes['04'],
  h5Max: pxTextSizes['06'],
  h4Min: pxTextSizes['05'],
  h4Max: pxTextSizes['07'],
  h3Min: pxTextSizes['06'],
  h3Max: pxTextSizes['08'],
  h2Min: pxTextSizes['07'],
  h2Max: pxTextSizes['10'],
  h1Min: pxTextSizes['08'],
  h1Max: pxTextSizes['11'],
}


/**
 * config
 */

// stitches.config.ts

createStitches({
  theme: {
  colors: {},
    fontSizes: {
      baseRem: 16,
      maxBp: breakpoints[breakpoints.length - 1],
      ...textSizes,
    },
  // ...
  },
  utils: {
    fz: (size: textTokens): StitchesCSS => {
      /**
       * clamp() performs a calc() on each of its arguments,
       * so there is no need to add a calc() to each of these values.
       * Normally this is not valid css without a calc() wrapper.
       */
      const min = `$${size}Min / $baseRem * 1rem`
      const max = `$${size}Max / $baseRem * 1rem`
      const mid = `$${size}Max / $maxBp * 100vw`

      /**
       * The first fontSize is a fallback for browsers that don't support clamp().
       * We are simply falling back to the min value for each text size.
       *
       * The `@supports` query is simply checking that calculations within clamp
       * are also supported. It might be overkill, but that is tough to test.
       */
      return {
        fontSize: `calc(${min})`,
        '@supports (font-size: clamp(12 / 16 * 1rem, 18 / 1024 * 100vw, 2rem))':
          {
            fontSize: `clamp(${min}, ${mid}, ${max})`,
          },
      }
    },
}


/**
 * call utils..
 */

// Text.styles.ts (just as one example)

variants: {
  size: {
      xs: {
        fz: 'xs',
      },
      sm: {
        fz: 'sm',
      },
      md: {
        fz: 'md',
      },
      lg: {
        fz: 'lg',
      },
      xl: {
        fz: 'xl',
      },
    },
}