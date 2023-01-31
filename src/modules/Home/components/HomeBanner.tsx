import { Container, styled, Theme, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import ItemHeroBanner from './ItemSlideBanner';
import { WidgetBottom, WidgetLeft, WidgetRight } from './elements/Widgets';

const HeroBanner = ({ fullpageApi }: any) => {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <ContainerHero>
      <WidgetLeft animationSeconds={1.4} hiddenElement={!mobile} />
      <Container>
        <WrapperHero>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 9500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            style={{
              height: '70vh',
              maxWidth: 1000,
            }}
          >
            <SwiperSlide>
              <ItemHeroBanner
                fullpageApi={fullpageApi}
                title="Innovación"
                subtitle=" En Digital Agency somos profesionales innovadores con
              experiencia y compromiso, brindamos en cada servicio,
              asesoramiento personalizado para todos nuestros clientes"
                srcImage="/images/home-banner/creativity.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ItemHeroBanner
                fullpageApi={fullpageApi}
                title="Soluciones"
                subtitle="Realizamos SOLUCIONES DIGITALES analizamos en profundidad cada proyecto para entender las necesidades del cliente y sus usuarios, alineándonos con sus objetivos de negocio y expectativas de ventas"
                srcImage="/images/home-banner/solutions.png"
              />
            </SwiperSlide>
          </Swiper>
        </WrapperHero>
      </Container>
      <WidgetRight
        size="medium"
        background="#211F20"
        animationSeconds={1.7}
        hiddenElement={!mobile}
      />
      <WidgetRight size="sm" animationSeconds={2} hiddenElement={!mobile} />
      <WidgetRight
        size="large"
        animationSeconds={2}
        background="transparent"
        hiddenElement={!mobile}
      />
      <WidgetBottom animationSeconds={1.4} background="#211F20" />
    </ContainerHero>
  );
};

export default HeroBanner;

const ContainerHero = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  height: '87vh',

  [theme.breakpoints.up('md')]: {
    height: 'calc(100vh - 82px )',
  },
}));

const WrapperHero = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    height: '70vh',
  },
}));
