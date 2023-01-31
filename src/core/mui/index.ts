const { createTheme } = require('@mui/material');
import { typography } from './fundations/typography';
import { components } from './components';
import { palette } from './palette/index';

export const theme = createTheme({
  // Use spacing with caution, the default multiplying factor of Mui is 0.5 (factor * 0.5)rem
  // this means that the factor will change if you use a component that is not wrapped in the ThemeProvider where this theme is used.
  spacing: (factor: number) => `${0.25 * factor}rem`,
  components,
  palette,
  typography,
  shape: {
    borderRadius: 8,
  },
  
});
