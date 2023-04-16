import { styled } from '@mui/material';
import { Container } from '@mui/system';
import {
  TbBrandLinkedin,
  TbBrandInstagram,
  TbBrandWhatsapp,
} from 'react-icons/tb';
import Contact from '../../modules/Home/components/Contact';
import LinkDa from '../../core/components/LinkDa/LinkDa';

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <WrapperFooter>
          <ContainerRedSocial>
            <Container>
              <TitleRedSocial>Redes sociales:</TitleRedSocial>
              <WrapperRedSocial>
                <RedSocial>
                  <LinkDa href='https://www.linkedin.com' target='_blank'>
                    <Linkedin />
                  </LinkDa>
                </RedSocial>

                <RedSocial>
                  <LinkDa href='https://www.instagram.com' target='_blank'>
                    <Instagram />
                  </LinkDa>
                </RedSocial>

                <RedSocial>
                  <LinkDa href='https://api.whatsapp.com' target='_blank'>
                    <Whatsapp />
                  </LinkDa>
                </RedSocial>
              </WrapperRedSocial>
            </Container>
          </ContainerRedSocial>

          <ContainerUbitacion>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0434861695835!2d-58.41540188441275!3d-34.603061864971195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8bbe63ba8d%3A0x178ab6dd8416ff0a!2sHumahuaca%203411%2C%20C1191ABC%20CABA!5e0!3m2!1ses!2sar!4v1663549423391!5m2!1ses!2sar'
              width='100%'
              height='130px'
              style={{ border: 0, borderRadius: 5 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </ContainerUbitacion>
        </WrapperFooter>
      </ContainerFooter>
    </>
  );
};

export default Footer;

const WrapperRedSocial = styled('div')(({}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
const ContainerUbitacion = styled('div')(({}) => ({}));

const WrapperFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 20,
  flexWrap: 'wrap',
  [theme.breakpoints.up('md')]: {
    gap: 20,
    height: 152,
  },
}));

const TitleRedSocial = styled('h3')(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.primary.main,
  margin: theme.spacing(4, 0),
  fontSize: 35,
}));

const Linkedin = styled(TbBrandLinkedin)(({}) => ({}));

const Whatsapp = styled(TbBrandWhatsapp)(({}) => ({}));

const Instagram = styled(TbBrandInstagram)(({}) => ({}));

const RedSocial = styled('div')(({ theme }) => ({}));

const ContainerRedSocial = styled('div')(({ theme }) => ({
  svg: {
    fontSize: 40,
    color: theme.palette.primary.main,
  },
}));

const ContainerFooter = styled('footer')(({ theme }) => ({
  width: '100%',
  background: theme.palette.secondary.main,
  [theme.breakpoints.up('md')]: {
    height: '20vh',
  },
}));
