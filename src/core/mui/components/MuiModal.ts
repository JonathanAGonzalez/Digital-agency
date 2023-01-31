import { Components } from '@mui/material';

export const MuiModal: Components['MuiModal'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '&:focus': {
        outline: 'none',
      },
    },
  },
};
