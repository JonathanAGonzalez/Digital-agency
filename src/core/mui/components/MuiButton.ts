import { alpha, Components } from '@mui/material';

import { colors } from '../palette/colors';
import { rem } from '../../utilities/rem';

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      height: 52,
      borderRadius: rem(38),
      textTransform: 'none',
      paddingLeft: rem(32),
      paddingRight: rem(32),
    },
  },
  variants: [
    {
      props: { variant: 'contained', color: 'primary' },
      style: {
        backgroundColor: colors.raisinBlack,
        color: 'white',
        '&:hover': {
          backgroundColor: colors.anthraciteGrey,
        },
        '&:focus, &:active': {
          backgroundColor: colors.burntUmber,
        },
        '&:disabled': {
          backgroundColor: alpha(colors.raisinBlack, 0.3),
        },
      },
    },
    {
      props: { variant: 'outlined', color: 'primary' },
      style: {
        borderWidth: 1.5,
        backgroundColor: 'white',
        color: colors.raisinBlack,
        borderColor: colors.raisinBlack,
        '&:hover': {
          borderWidth: 1.5,
          borderColor: colors.anthraciteGrey,
          color: colors.anthraciteGrey,
        },
        '&:focus, &:active': {
          borderWidth: 1.5,
          borderColor: colors.burntUmber,
          color: colors.burntUmber,
        },
        '&:disabled': {
          borderWidth: 1.5,
          borderColor: alpha(colors.raisinBlack, 0.3),
          color: alpha(colors.raisinBlack, 0.3),
          cursor: 'not-allowed',
          pointerEvents: 'all',
        },
      },
    },
    {
      props: { size: 'small' },
      style: {
        height: 40,
        fontSize: 18,
      },
    },
    {
      props: { size: 'large' },
      style: {
        height: 64,
        minWidth: 190,
        fontSize: 28,
      },
    },
  ],
};
