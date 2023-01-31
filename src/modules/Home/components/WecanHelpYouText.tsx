import { styled } from '@mui/material';
import Typography from '@mui/material/Typography';

export const WecanHelpYouText = () => {
  return (
    <Container>
      <Title>
        ¿Cómo podemos <ImportantText>Ayudarte?</ImportantText>
      </Title>
      <Paragraph>
        Llevamos a cabo todo el proceso. Desde la creación del diseño y la
        unificación con el desarrollo web. Contamos con soporte y mantenimiento
        mensual.
      </Paragraph>
    </Container>
  );
};

const Container = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: 30,
  lineHeight: '34px',
}));

const Paragraph = styled('p')(({ theme }) => ({}));

const ImportantText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
  display: 'inline-block',
}));
