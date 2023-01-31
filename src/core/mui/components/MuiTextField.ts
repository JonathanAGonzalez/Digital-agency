import { Components } from '@mui/material';

export const MuiTextField: Components['MuiTextField'] = {
  defaultProps: {
    variant: 'filled',
  },
  styleOverrides: {
    root: {
      background: '#f3f3f333',
      borderRadius: 4,
      color: '#f3f3f3',
      '& .MuiInputLabel-root': {
        color: '#d3d3d3',
      },
      '.MuiInputBase-input': {
        color: '#f3f3f3',
      },
    },
  },
};
