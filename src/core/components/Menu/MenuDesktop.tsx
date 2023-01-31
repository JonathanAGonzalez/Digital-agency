import { keyframes, styled, Theme } from '@mui/material';
import LinkDa from '../LinkDa';

interface MenuItemProps {
  theme?: Theme;
  active: boolean;
}

export const MenuDesktop = ({ moveTo }: any) => {
  return (
    <MenuList id="#menu">
      <MenuItem active={false} onClick={() => moveTo('home', 0)}>
        <LinkDa href="#home" activeText={false} sx={sx}>
          Home
        </LinkDa>
      </MenuItem>

      <MenuItem active={false} onClick={() => moveTo('services', 1)}>
        <LinkDa href="#services" activeText={false} sx={sx}>
          Servicios
        </LinkDa>
      </MenuItem>

      <MenuItem active={false} onClick={() => moveTo('about-us', 2)}>
        <LinkDa href="#about-us" activeText={false} sx={sx}>
          Nosotros
        </LinkDa>
      </MenuItem>

      <MenuItem active={false} onClick={() => moveTo('plan-price', 3)}>
        <LinkDa href="#about-us" activeText={false} sx={sx}>
          Planes
        </LinkDa>
      </MenuItem>

      <MenuItem active onClick={() => moveTo('contact', 4)}>
        <LinkDa href="#contact" activeText={true} sx={sx}>
          Contactanos
        </LinkDa>
      </MenuItem>
    </MenuList>
  );
};

const AnchorAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }

`;

const sx = {
  '&:hover': {
    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: '100%',
      height: 2,
      background: '#f3f3f3',
      animation: `${AnchorAnimation} .7s ease-in-out`,
    },
  },
};

const MenuList = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});

const MenuItem = styled('li', {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'activeText',
})(({ theme, active }: MenuItemProps) => ({
  listStyle: 'none',
  background: active ? '#F4D547' : 'none',
  borderRadius: '5px',
  padding: '2px 15px',
}));
