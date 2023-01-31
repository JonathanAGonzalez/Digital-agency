import { Container, styled } from '@mui/material';
import { WidgetTop } from '../../../modules/Home/components/elements/Widgets';
import Logo from '../Logo';
import Menu from '../Menu';

const Header = ({ moveTo }: any) => {
  return (
    <ContainerHeader>
      <Container>
        <WrapperHeader>
          <WidgetTop animationSeconds={2} />
          <Logo />
          <Menu moveTo={moveTo} />
        </WrapperHeader>
      </Container>
    </ContainerHeader>
  );
};

export default Header;

const WrapperHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.palette.secondary.main,
  padding: theme.spacing(4, 10),
  color: '#f3f3f3',
  position: 'relative',
  top: 0,
  zIndex: 3,
}));

const ContainerHeader = styled('header')(({ theme }) => ({
  background: theme.palette.secondary.main,
  overflow: 'hidden',
  position: 'sticky',
}));
