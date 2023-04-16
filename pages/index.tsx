import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Container, styled, Typography } from '@mui/material';
import Header from '../src/core/components/Header';
import AboutUs from '../src/modules/Home/components/AboutUs';
import HeroBanner from '../src/modules/Home/components/HomeBanner';
import ModalPriceService from '../src/modules/Home/components/ModalPriceService';
import PlanPrice, {
  textDataCards,
} from '../src/modules/Home/components/PlanPrice';
import { Services } from '../src/modules/Home/components/Services';
import Footer from '../src/common/components/Footer';
import LayoutMain from '../src/common/layouts/LayoutMain';
import Contact from '../src/modules/Home/components/Contact';
import Whatsapp from '../src/icons/whatsapp.png';
import LinkDa from '../src/core/components/LinkDa';
import { ToastContainer } from 'react-toastify';

const Home: NextPage = () => {
  const [showModalPrice, setshowModalPrice] = useState(false);

  const openModalPriceService = () => setshowModalPrice(true);
  const closeModalPriceService = () => setshowModalPrice(false);

  const anchors = ['home', 'services', 'about-us', 'plan-price', 'contact'];

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <LinkDa href='https://api.whatsapp.com/' target='_blank' sx={{}}>
        <WhatsappIcon />
      </LinkDa>
      <ReactFullpage
        anchors={anchors}
        navigation
        menu='#menu'
        navigationPosition='right'
        fitToSection={false}
        lazyLoading
        responsiveWidth={900}
        navigationTooltips={[
          'Home',
          'Servicios',
          'Nosotros',
          'Planes',
          'Contacto',
        ]}
        render={({ state, fullpageApi }) => {
          return (
            <LayoutMain title={'Home'}>
              <div className='section' id='#home'>
                <Header moveTo={fullpageApi?.moveTo} />
                <HeroBanner fullpageApi={fullpageApi} />
              </div>

              <div className='section' data-section='#services'>
                <Services />
              </div>

              <div className='section'>
                <AboutUs />
              </div>

              <div className='section'>
                <ModalPriceService
                  itemsCards={textDataCards}
                  onClose={closeModalPriceService}
                  open={showModalPrice}
                />
                <PlanPrice openModalPriceService={openModalPriceService} />
              </div>

              <div className='section'>
                <ContainerContact>
                  <Container>
                    <Contact />
                  </Container>
                </ContainerContact>
                <Footer />
              </div>
            </LayoutMain>
          );
        }}
      />
    </>
  );
};

export default Home;

const WhatsappIcon = styled('div')(({ theme }) => ({
  position: 'fixed',
  height: 80,
  width: 80,
  zIndex: 200,
  bottom: 90,
  right: 50,
  cursor: 'pointer',
  background: `url(${Whatsapp.src})`,
  backgroundSize: 'cover',
}));

const ContainerContact = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  // height: '100vh',
  width: '100%',
  background: theme.palette.common.white,
  backgroundImage: `url("/images/form-contact/background-section.png")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  // paddingTop: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(0),
  },
}));

const ContainerPromotion = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  zIndex: 40,
  textAlign: 'center',
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: 0,
}));
