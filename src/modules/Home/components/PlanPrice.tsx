import { Container, styled } from '@mui/material';
import CardsService from './CardsService';

export const textDataCards = [
  {
    title: 'Landing page',
    subTitle: 'Una web con posibilidad de crecimiento rápido',
    text: '3 Páginas',
    id: 1,
    price: 100,
    src: '/images/cards/basic.png',
    pictureModal: '/images/modal/landing.png',
    listToShowInCard: [
      '3 Páginas',
      'Diseño por catalogo',
      '1 año de dominio',
      '1 Alojamiento anual',
    ],
    full_lists: [
      'Diseño por catalogo',
      '1 año de dominio',
      '1 Alojamiento anual',
      '1 Email de negocio',
      '3 Enlaces a redes sociales',
      '1 Botón de whatsapp',
      '1 Formulario de contacto',
      'Certificado SSL',
      'Web accesible y semántica',
    ],
  },
  {
    title: 'Ecommerce',
    subTitle: 'Vender sin costo de comisión, administrando tu propia tienda',
    text: 'Diseños por catálogo',
    id: 2,
    price: 200,
    src: '/images/cards/premium.png',
    pictureModal: '/images/modal/ecommerce.png',
    listToShowInCard: [
      '4 Páginas',
      'Carga de 10 productos',
      'Autogestión ',
      '1 año de dominio',
    ],
    full_lists: [
      '4 Páginas',
      'Carga de 10 productos',
      'Autogestión',
      'Diseño complementando UX/UI',
      'Mapa google integrado',
      '1 año de dominio',
      '1 Alojamiento anual',
      'Email de negocio',
      '3 Enlaces a redes sociales',
      '1 Botón de whatsapp',
      'Formulario de contacto',
      'Certificado SSL',
      'Diseño totalmente responsive',
      'Web accesible y semántica',
    ],
  },
  {
    title: 'Institucional',
    subTitle: 'Sitios web coorporativos, con un diseño a medida',
    text: '1 año de hosting',
    id: 3,
    price: 300,
    src: '/images/cards/standar.png',
    pictureModal: '/images/modal/institutional.png',
    listToShowInCard: [
      '3 Páginas',
      'Diseño complementando UX/UI',
      'Mapa google integrado',
      '1 año de dominio',
    ],

    full_lists: [
      '3 Páginas',
      'Diseño complementando UX/UI',
      'Mapa google integrado',
      '1 año de dominio',
      '1 Alojamiento anual',
      'Email de negocio',
      '3 Enlaces a redes sociales',
      '1 Botón de whatsapp',
      'Formulario de contacto',
      'Certificado SSL',
      'Diseño totalmente responsive',
      'Web accesible y semántica',
    ],
  },
];

interface PlanPriceProps {
  openModalPriceService: () => void;
}

const PlanPrice = ({ openModalPriceService }: PlanPriceProps) => {
  return (
    <ContainerPlanPrice>
      <Title>Planes</Title>
      <Subtitle>
        La web de tu negocio, es tu vidriera en el mundo digital
      </Subtitle>

      <ContainerCards>
        {textDataCards.map((card) => (
          <CardsService
            itemsCards={card.listToShowInCard}
            key={card.id}
            id={card.id}
            price={card.price}
            title={card.title}
            subTitle={card.subTitle}
            src={card.src}
            onOpenModal={openModalPriceService}
          />
        ))}
      </ContainerCards>
    </ContainerPlanPrice>
  );
};

export default PlanPrice;

const ContainerPlanPrice = styled(Container)(({ theme }) => ({
  padding: theme.spacing(20, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(0),
    height: '100vh',
  },
}));

const Title = styled('p')(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.primary.main,
  fontSize: 50,
  textAlign: 'center',
  textTransform: 'uppercase',
}));

const Subtitle = styled('h5')(({ theme }) => ({
  ...theme.typography.h5,
  fontSize: 20,
  textAlign: 'center',
  color: theme.palette.common.white,
  margin: theme.spacing(0, 0, 10, 0),
}));

const ContainerCards = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: 20,
  flexWrap: 'wrap',
  [theme.breakpoints.up('md')]: {
    flexWrap: 'initial',
  },
}));
