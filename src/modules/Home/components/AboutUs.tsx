import Image from 'next/image';
import {
  Container,
  keyframes,
  styled,
  Theme,
  useMediaQuery,
} from '@mui/material';

import thumb from '../../../../public/images/about-us/thumbup.png';
import location from '../../../../public/images/about-us/location.png';

const itemInformation = [
  {
    id: 1,
    order: false,
    title: 'Misión',
    img: thumb,
    text: 'Nos enfocamos en las definiciones claves mediante la planificación y ejecución de estrategias para cada proyecto. Nuestro foco es el cliente, por eso brindamos soluciones y los acompañamos a lo largo del proceso de implementación. Nos especializamos en el diseño de propuestas innovadoras, orientadas a los objetivos del negocio.',
  },
  {
    id: 2,
    order: true,
    title: 'Visión',
    img: location,
    text: 'Nuestro propósito en Digital Agency es brindar servicios de calidad y excelencia a todo aquello cliente que se quiera incorporar en la transformación digital, no importa si es pequeño, mediano o grande. Acá tendrás asesoramiento con profesionales altamente calificados adaptándonos a distintos rubros. Creando soluciones accesibles para ser inclusivos con nuestros usuarios',
  },
];

interface AboutItemProps {
  title: string;
  text: string;
  src: string;
  order: boolean;
}

interface ItemAboutProps {
  order: boolean;
  theme?: Theme;
}

const AboutItem = ({ title, text, src, order }: AboutItemProps) => {
  return (
    <ItemAbout order={order}>
      <WrapperText>
        <TitleItem>{title}</TitleItem>
        <Text>{text}</Text>
      </WrapperText>

      <WrapperImage>
        <Image priority src={src} width={168} height={168} alt="" />
      </WrapperImage>
    </ItemAbout>
  );
};

const AboutUs = () => {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <ContainerAboutUs>
      <Container>
        <WrapperItem>
          <Title>¿Por qué deberías elegirnos?</Title>
          <WrapperText
            sx={{
              textAlign: 'center',
              margin: '20px auto',
              marginBottom: 15,
              fontSize: 20,
              width: mobile ? '100%!important' : '75%!important',
            }}
          >
            <Text>
              Realizamos <TextMarked>SOLUCIONES DIGITALES</TextMarked>{' '}
              analizamos en profundidad cada proyecto para entender las
              necesidades del cliente y sus usuarios, alineándonos con sus
              objetivos de negocio y expectativas de ventas
            </Text>
          </WrapperText>
          {itemInformation.map((item) => (
            <AboutItem
              key={item.id}
              title={item.title}
              text={item.text}
              src={item.img.src}
              order={item.order}
            />
          ))}
        </WrapperItem>
      </Container>
    </ContainerAboutUs>
  );
};

export default AboutUs;

const TextMarked = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const AnimationAboutImage = keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(4deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-3deg);
    }
    30% {
      transform: rotate(4deg);
    }
    40% {
      transform: rotate(-3deg);
    }
    50% {
      transform: rotate(4deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
    `;

const Text = styled('p')(({ theme }) => ({}));

const Title = styled('h3')(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: 35,
  position: 'relative',
  '&::after': {
    content: '""',
    height: 2,
    width: '50%',
    position: 'absolute',
    background: theme.palette.primary.main,
    bottom: 0,
    left: 'calc(50% - 50%/2)',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 50,
  },
}));

const TitleItem = styled('h2')(({ theme }) => ({
  ...theme.typography.h3,
  fontSize: 45,
  position: 'relative',
  display: 'inline-block',
  marginBottom: 10,
  '&::after': {
    content: '""',
    height: 3,
    left: 0,
    bottom: 5,
    width: '100%',
    position: 'absolute',
    background: theme.palette.primary.main,
  },
}));

const ContainerAboutUs = styled('article')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme?.spacing(20, 2),

  [theme.breakpoints.up('md')]: {
    height: '100vh',
  },
}));

const WrapperItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  '&:nth-child(1)': {
    gap: 10,
  },
}));

const WrapperText = styled('div')(({ theme }) => ({
  width: '100%',
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
}));

const ItemAbout = styled('div', {
  shouldForwardProp: (prop) => prop !== 'order',
})(({ theme, order }: ItemAboutProps) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: order ? 'row-reverse' : 'row',
  gap: 20,
  flexWrap: 'wrap',
  marginBottom: 20,
}));

const WrapperImage = styled('div')(({ theme }) => ({
  animation: `${AnimationAboutImage} 2s ease-in-out infinite`,
}));
