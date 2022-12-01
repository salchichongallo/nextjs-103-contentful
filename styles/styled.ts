import { createStitches } from '@stitches/react';

const stitches = createStitches({
  theme: {
    colors: {
      green100: '#deedec',
      green200: '#b3e5e1',
      green300: '#47d1c6',
      green400: '#12a195',
      green500: '#00776d',

      red100: '#f2f9da',
      red200: '#e08589',
      red300: '#e5353e',
      red400: '#a3292f',
      red500: '#521418',

      yellow100: '#f5ecd6',
      yellow200: '#f0dca8',
      yellow300: '#f5cb5c',
      yellow400: '#fdd058',
      yellow500: '#d2a52d',
      yellow600: '#7a611f',

      gray100: '#f3f5f6',
      gray200: '#ced4d4',
      gray300: '#adb5bd',
      gray400: '#6c767d',
      gray500: '#343a40',

      alertInfo: '#1aa7c1',
      alertError: '#d23d3d',
      alertWarning: '#ffcf4d',
      alertSuccess: '#25cf7e',

      black: '#1f1f1f',
      white: '#fff',
    },
  },
  media: {
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1366px)',
    desktop: '(min-width: 1920px)',
  },
  prefix: 'gm',
});

export const {
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = stitches;

export default stitches.styled;
