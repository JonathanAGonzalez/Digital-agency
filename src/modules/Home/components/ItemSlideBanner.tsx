import Image from 'next/image';
import { styled, Button } from '@mui/material';
import LinkDa from '../../../core/components/LinkDa';
import { AnimationText } from '../../../core/animations/fadeElement';

interface ItemHeroBannerProps {
  title: string;
  subtitle: string;
  href?: string;
  srcImage: string;
  fullpageApi?: any;
}

const ItemHeroBanner = ({
  title,
  subtitle,
  href = '',
  srcImage,
  fullpageApi,
}: ItemHeroBannerProps): JSX.Element => {
  const renderImage = srcImage.includes('solutions') && {
    width: 304,
    height: 270,
  };

  return (
    <ContainerItemBanner>
      <WrapperImage>
        <Image
          src={srcImage}
          width={renderImage ? renderImage.width : 350}
          height={renderImage ? renderImage.height : 324}
          quality={100}
          priority
          alt=""
        />
      </WrapperImage>

      <WrapperInformation>
        <Leyend></Leyend>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <WrapperButton>
          <LinkDa href={href}>
            <Button
              variant="contained"
              onClick={() => fullpageApi?.moveTo('contact', 4)}
            >
              Saber más
            </Button>
          </LinkDa>
        </WrapperButton>
      </WrapperInformation>
    </ContainerItemBanner>
  );
};

export default ItemHeroBanner;

const Leyend = styled('p')(({ theme }) => ({
  ...theme.typography.h3,
  position: 'relative',
  paddingLeft: 110,
  fontSize: 20,
  animation: `${AnimationText} 1s ease-in-out`,
  fontWeight: 600,
  '&::before': {
    content: "''",
    position: 'absolute',
    display: 'block',
    borderRadius: 10,
    height: 3,
    width: 90,
    bottom: 'calc(50% - 3px / 2)',
    left: 0,
    background: theme.palette.primary.main,
  },
}));

const WrapperButton = styled('div')(({ theme }) => ({
  margin: theme.spacing(5, 0),
  animation: `${AnimationText} 2s ease-in-out`,
}));

const ContainerItemBanner = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 50,
  width: '100%',
  height: '80%',
  padding: 10,
}));

const WrapperImage = styled('div')(({ theme }) => ({
  animation: `${AnimationText} 2s ease-in-out`,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const WrapperInformation = styled('div')(({ theme }) => ({
  width: '80%',
  color: theme.palette.common.white,
}));

const Title = styled('h2')(({ theme }) => ({
  fontWeight: 900,
  fontSize: 40,
  textTransform: 'uppercase',
  position: 'relative',
  animation: `${AnimationText} 1.2s ease-in-out`,

  [theme.breakpoints.up('sm')]: {
    display: 'block',
    fontSize: 70,
  },
}));

const Subtitle = styled('p')(({ theme }) => ({
  animation: `${AnimationText} 1s ease-in-out`,
}));
