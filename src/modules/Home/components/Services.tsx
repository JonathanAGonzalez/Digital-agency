import { Container, styled } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';

import BoxService from '../../../common/components/BoxService';
import { WecanHelpYouText } from './WecanHelpYouText';

export const Services = () => {
  return (
    <ContainerServices>
      <Container>
        <WrapperServices>
          <WecanHelpYouText />

          <BoxService
            data-aos="fade-in"
            icon={<AccountCircleOutlinedIcon />}
            title="Diseño UX"
            text="Nos encargamos de ofrecer al usuario una interfaz accesible, clara,
        funcional, práctica y fácil de usar. La experiencia del usuario (es lo
        que el usuario vive cuando se navega en estas interfaces)."
          />

          <BoxService
            data-aos="fade-in"
            icon={<DesignServicesOutlinedIcon />}
            title="Diseño UI"
            text="Implementamos las fases del UX en elementos visuales y gráficos que le dan forma a la interfaz del usuario, aplicando bases psicológicas de la percepción y considerando resultados del análisis del comportamiento de usabilidad."
          />

          <BoxService
            data-aos="fade-in"
            icon={<LanguageOutlinedIcon />}
            title="Desarrollo Web"
            text="Nuestro equipo de desarrolladores web, se encargará de desarrollar todo lo pactado con diseño UX/UI, utilizando las últimas tecnologías en el mercado."
          />

          <BoxService
            data-aos="fade-in"
            icon={<AccessibilityNewOutlinedIcon />}
            title="Accesibilidad"
            text="Tenemos muy en claro que existen personas con diferentes capacidades, por lo cual, nos ocupamos que el sitio web tenga accesibilidad para que sea una experiencia inclusiva."
          />

          <BoxService
            data-aos="fade-in"
            icon={<QueryStatsOutlinedIcon />}
            title="SEO"
            text="Brindamos técnicas y herramientas para optimizar las páginas webs, para que los buscadores, como Google, puedan leerlas de forma más fácil y rápida. Adquiriendo las palabras claves que tus usuarios utilizarían."
          />
        </WrapperServices>
      </Container>
    </ContainerServices>
  );
};

const ContainerServices = styled('div')(({ theme }) => ({
  background: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  // marginTop: theme.spacing(30),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    marginTop: theme.spacing(0),
  },
}));

const WrapperServices = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 2),
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(1,1fr)',
  gridTemplateRows: 'repeat(2,1fr)',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3,1fr)',
    gridTemplateRows: 'repeat(auto,1fr)',
  },
}));
