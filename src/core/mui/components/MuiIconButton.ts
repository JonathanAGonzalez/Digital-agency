import { alpha, Components } from '@mui/material';
import { typographyFundations } from '../fundations/typographyFundations';
import { colors } from '../palette/colors';

export const MuiIconButton: Components['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
    disableFocusRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      '& .MuiSvgIcon-root': {
        fill: colors.mineShaft,
      },
    },
  },
  variants: [
    {
      props: { size: 'small' },
      style: {
        fontSize: typographyFundations.fontSizes.lg,
      },
    },
    {
      props: { size: 'medium', color: 'primary' },
      style: {
        padding: 0,
        backgroundColor: colors.blackOlive,
        '& .MuiSvgIcon-root': {
          fontSize: typographyFundations.fontSizes['2xl'],
          fill: 'white',
        },
        '&.Mui-disabled': {
          backgroundColor: alpha(colors.blackOlive, 0.5),
        },
      },
    },
  ],
};
