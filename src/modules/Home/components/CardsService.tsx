import { styled } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

interface CardsServiceProps {
  title: string;
  subTitle: string;
  itemsCards: String[];
  src: string;
  id: number;
  price: number;
  onOpenModal: () => void;
}

const CardsService = ({
  title,
  subTitle,
  itemsCards,
  src,
  id,
  price,
  onOpenModal,
}: CardsServiceProps) => {
  const router = useRouter();

  const goToModal = (id: number) => {
    router.push(
      {
        pathname: '/',
        query: { id },
      },
      undefined,
      { scroll: false }
    );
  };

  const onOpenModalPrice = () => {
    goToModal(id);
    onOpenModal();
  };

  return (
    <WrapperCard onClick={onOpenModalPrice}>
      <HeaderCard>
        {/* <Image
          src={src}
          width={400}
          height={300}
          alt=""
          quality={100}
          priority
        /> */}
        <Title sx={{ alignSelf: 'center', marginBottom: 0 }}>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </HeaderCard>

      <WrapperText>
        <GroupItemsList>
          {itemsCards?.map((items: String, index: number) => (
            <ItemsList key={index}>
              <>
                <IconItem />
                {items}{' '}
              </>
            </ItemsList>
          ))}
        </GroupItemsList>
        <WrapperButton>
          <Button variant="contained" fullWidth onClick={onOpenModalPrice}>
            Conocer más carácteristicas
          </Button>
        </WrapperButton>
      </WrapperText>
    </WrapperCard>
  );
};

export default CardsService;

const WrapperButton = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
}));

const Price = styled('h3')(({ theme }) => ({
  color: theme.palette.primary.main,
  alignSelf: 'center',
  margin: theme.spacing(2, 0),
  fontSize: 40,
  fontWeight: 400,
}));

const IconItem = styled(CheckIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const SubTitle = styled('p')(({ theme }) => ({
  alignSelf: 'center',
  marginBottom: 20,
  width: 300,
  textAlign: 'center',
  marginTop: theme.spacing(4),
}));

const Title = styled('p')(({ theme }) => ({
  ...theme.typography.h3,
  fontSize: 50,
  textAlign: 'center',
  color: theme.palette.grey[500],
  fontWeight: 600,
  marginBottom: 10,
}));

const GroupItemsList = styled('ul')(({ theme }) => ({}));

const ItemsList = styled('li')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}));

const WrapperText = styled('div')(({ theme }) => ({
  color: theme.palette.grey[300],
  width: '90%',
  margin: 'auto',
  marginTop: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  minHeight: 205,
  [theme.breakpoints.up('md')]: {
    width: '80%',
  },
}));

const WrapperCard = styled('div')(({ theme }) => ({
  background: theme.palette.grey[100],
  width: '80%',
  borderRadius: 15,
  minHeight: 350,
  height: 550,
  overflow: 'hidden',
  transition: 'all .2s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'scale(1.0)',
    ' & > div:first-of-type ': {
      transform: 'scale(1.02)',
    },
  },
  [theme.breakpoints.up('md')]: {
    width: 400,
  },
}));

const HeaderCard = styled('div')(({ theme }) => ({
  transition: 'all .6s ease',
  // background: theme.palette.primary.main,
  backgroundImage: `url('/images/cards/header-image.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  border: '1px solid transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 280,
  // borderRadius: ' 0px 0px 174px 174px / 25px 25px 150px 150px',
}));
