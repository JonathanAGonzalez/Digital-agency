import { styled } from '@mui/material';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import HeroBanner from './components/HomeBanner';
import ModalPriceService from './components/ModalPriceService';
import PlanPrice, { textDataCards } from './components/PlanPrice';
import { Services } from './components/Services';

const Home = () => {
  const [showModalPrice, setshowModalPrice] = useState(false);

  const openModalPriceService = () => setshowModalPrice(true);
  const closeModalPriceService = () => setshowModalPrice(false);

  return (
    <ContainerHome>
      <HeroBanner />
      <Services />
      <AboutUs />
      <ModalPriceService
        itemsCards={textDataCards}
        onClose={closeModalPriceService}
        open={showModalPrice}
      />
      <PlanPrice openModalPriceService={openModalPriceService} />
    </ContainerHome>
  );
};

export default Home;

const ContainerHome = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main,
}));
