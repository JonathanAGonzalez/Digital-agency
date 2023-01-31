import Image from 'next/image';
import { styled } from '@mui/material';

const Logo = () => {
  return (
    <ContainerLogo>
      <Image
        src="/images/logo.svg"
        alt="Logo Digital agency"
        width={50}
        height={50}
      />
      <Text>Digital Agency</Text>
    </ContainerLogo>
  );
};

export default Logo;

const ContainerLogo = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});

const Text = styled('h2')(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: 2,
  fontSize: 20,
  zIndex: 200,
}));
