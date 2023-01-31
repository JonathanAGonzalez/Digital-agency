import { ThemeOptions } from '@mui/material';
import { typographyFundations } from './typographyFundations';

export const typography: ThemeOptions['typography'] = {
  fontFamily: typographyFundations.fonts.body,
  h1: {
    fontFamily: typographyFundations.fonts.heading,
    fontSize: typographyFundations.fontSizes.xl,
  },
  h2: {
    fontFamily: typographyFundations.fonts.heading,
    fontSize: typographyFundations.fontSizes.xl,
  },
  h3: {
    fontFamily: typographyFundations.fonts.heading,
    fontSize: typographyFundations.fontSizes.xl,
  },
  h4: {
    fontFamily: typographyFundations.fonts.body,
    fontSize: typographyFundations.fontSizes.lg,
    fontWeight: typographyFundations.fontWeights.medium,
  },
  h6: {
    fontFamily: typographyFundations.fonts.body,
    fontSize: typographyFundations.fontSizes.xs,
    fontWeight: typographyFundations.fontWeights.medium,
  },
};
