import { alpha, ThemeOptions } from '@mui/material';
import { green, orange } from '@mui/material/colors';
import { colors } from './colors';

export const palette: ThemeOptions['palette'] = {
  primary: {
    main: colors.yellow,
  },
  secondary: {
    main: colors.darkness,
  },
  error: {
    main: colors.alizarinCrimson,
  },
  info: {
    main: colors.curiousBlue,
  },
  success: green,
  warning: orange,
  grey: {
    '100': alpha(colors.blackOlive, 0.5),
    '500': colors.blackOlive,
    '800': colors.raisinBlack,
    '900': colors.thunder,
    A700: colors.mineShaft,
  },
};
