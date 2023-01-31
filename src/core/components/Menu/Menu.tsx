import { useState } from 'react';

import { Box, Button, Drawer, styled, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { MenuDesktop } from './MenuDesktop';

const Menu = ({ moveTo }: any) => {
  const mobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const openMenu = () => {
    setOpen(true);
  };

  const handleSection = (section: string, index: number) => {
    closeMenu();
    moveTo(section, index);
  };

  return (
    <>
      {mobile ? (
        <>
          <SideMenu anchor={'right'} open={open} onClose={closeMenu}>
            <Box
              sx={{
                width: '50vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Item
                onClick={() => {
                  closeMenu();
                  moveTo('home', 0);
                }}
              >
                Home
              </Item>
              <Item onClick={() => handleSection('services', 1)}>
                Servicios
              </Item>
              <Item onClick={() => handleSection('about-us', 2)}>Nosotros</Item>
              <Item onClick={() => handleSection('plan-price', 3)}>Planes</Item>
              <Item onClick={() => handleSection('contact', 4)}>
                Contactanos
              </Item>
            </Box>
          </SideMenu>

          <Button onClick={() => openMenu()}>
            <Burger />
          </Button>
        </>
      ) : (
        <MenuDesktop moveTo={moveTo} />
      )}
    </>
  );
};

export default Menu;

const Burger = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 30,
}));

const SideMenu = styled(Drawer)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  width: '80vw',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Item = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.h2,
  width: '100%',
  justifyContent: 'center',
  padding: 15,
  fontWeight: 600,
  span: {
    color: 'red',
  },
  '&:hover': {
    background: theme.palette.primary.main,
  },
}));
