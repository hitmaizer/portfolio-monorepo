import { breakpoints, mediaQueries } from './mediaQueries';

const theme = {
  // default Breakpoints
  breakpoints,
  mediaQueries,

  fonts: {
    body: '"Montserrat", system-ui, -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans", "Liberation Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    heading:
      '"Oxygen", system-ui, -apple-system, "Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans", "Liberation Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },

  colors: {
    body: '#F2F2F2',
    text: '#4F4F4F',
    cardBg: '#FFFFFF',
    primaryBlue: '#2F80ED',
    darkenBlue: '#0b3e82',
    offWhiteBg: '#F2F2F2',
    whiteCardBg: '#FFFFFF',
    cardTitle1: '#363636',
    cardTitle2: '#333333',
    subText: '#696969',
    black: '#000000',
    btnText: '#F2F2F2',
    offGray: '#E0E0E0',
  },

  // default fontSizes
  fontSizes: [13, 15, 18, 22, 26, 32, 44, 64],

  // default LineHeights
  lineHeights: {
    body: 1.6,
    heading: 1.2,
  },

  // default fontWeights
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },

  // default space for margin and padding
  space: [
    0, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56, 64, 80, 96, 112,
    128, 160, 192, 256, 320,
  ],

  sizes: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    10: 40,
    12: 48,
    14: 56,
    16: 64,
    20: 80,
    24: 96,
    32: 128,
    48: 192,
    64: 256,
    80: 320,
    128: 512,

    container: {
      lg: 1280,
      sm: 750,
    },
  },

  radii: {
    0: 0,
    1: 3,
    2: 4,
    3: 8,
    4: 16,
    round: '50%',
    pill: '9999',
  },

  borders: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 },
};

export * from './mediaQueries';

export default theme;
