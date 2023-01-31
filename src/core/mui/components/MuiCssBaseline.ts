import { Components } from '@mui/material';

export const MuiCssBaseline: Components['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: `
 
  @font-face {
    font-family: "Indie Flower";
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: local("Indie"), local("Indie"), url(/fonts/Indie/IndieFlower.ttf) format('truetype');
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src: local("Poppins"), local("Poppins"), url(/fonts/Poppins/Poppins-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: local("Poppins"), local("Poppins"), url(/fonts/Poppins/Poppins-Regular.ttf) format('truetype');
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: local("Poppins"), local("Poppins"), url(/fonts/Poppins/Poppins-Medium.ttf) format('truetype');
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src: local("Poppins"), local("Poppins"), url(/fonts/Poppins-Bold.ttf) format('truetype');
  }

  @font-face {
    font-family: "Poppins";
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: local("Poppins"), local("Poppins"), url(/fonts/Poppins-Black.ttf) format('truetype');
  }
  `,
};
