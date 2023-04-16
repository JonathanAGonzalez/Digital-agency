import { useEffect, useState } from 'react';
import { Button, Fade, styled, Theme } from '@mui/material';
import ModalMui from '@mui/material/Modal';
import { useRouter } from 'next/router';
import CheckIcon from '@mui/icons-material/Check';
import LinkDa from '../../../core/components/LinkDa';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

interface Data {
  full_lists: string[];
  id: number;
  listToShowInCard: string[];
  subTitle: string;
  text: string;
  title: string;
  pictureModal: string;
}

interface ModalPriceServiceProps {
  itemsCards: Array<Data>;
  onClose: () => void;
  open: boolean;
}

const ModalPriceService = ({
  itemsCards,
  onClose,
  open,
}: ModalPriceServiceProps) => {
  const [data, setData] = useState<Data | undefined>({} as Data);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const item = itemsCards.find(
      (item: any) => item.id === Number(router.query.id)
    );
    setData(item);
    setLoading(false);
  }, [router, itemsCards]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      disableAutoFocus
    >
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <Fade in={true}>
            <ContainerModal>
              <CloseIconModal onClick={onClose} />
              <WrapperTextInformation>
                <TextIntroduction>
                  Plan {data?.title} para tu comercio
                </TextIntroduction>
                <Title>Qué incluye el plan {data?.title}?</Title>

                <List>
                  {data?.full_lists?.map((item, index: number) => (
                    <ListItem key={index}>
                      {' '}
                      <IconItem /> {item}
                    </ListItem>
                  ))}
                </List>
                <WrapperButton>
                  <LinkDa href='https://api.whatsapp.com' target='_blank'>
                    <Button variant='contained'>Hablemos de tu proyecto</Button>
                  </LinkDa>
                </WrapperButton>
              </WrapperTextInformation>

              <WrapperBackgroundModal>
                <Image
                  src={data?.pictureModal || '/images/plan-1.png'}
                  width={400}
                  height={300}
                  alt='modal image'
                  priority
                />
              </WrapperBackgroundModal>
            </ContainerModal>
          </Fade>
        </div>
      )}
    </Modal>
  );
};

export default ModalPriceService;

const CloseIconModal = styled(CloseIcon)({
  position: 'absolute',
  right: 10,
  top: 10,
  cursor: 'pointer',
});

const Modal = styled(ModalMui)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const WrapperTextInformation = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

interface WrapperBackgroundModalProps {
  theme?: Theme | any;
}

const WrapperBackgroundModal = styled('div')(
  ({ theme }: WrapperBackgroundModalProps) => ({
    width: '40%',
    display: 'none',
    [theme?.breakpoints?.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const WrapperButton = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
}));

const ContainerModal = styled('div')(({ theme }) => ({
  display: 'flex',
  background: '#fff',
  width: '100%',
  minHeight: 400,
  borderRadius: 10,
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 777,
    minHeight: 591,
    padding: theme.spacing(0, 5),
  },
}));

const IconItem = styled(CheckIcon)(({ theme }) => ({
  color: theme.palette.success.main,
}));

const List = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: 5,
}));

const ListItem = styled('li')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
}));

const TextIntroduction = styled('h6')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Title = styled('h3')(({ theme }) => ({
  ...theme.typography.h3,
  marginBottom: theme.spacing(5),
  marginTop: theme.spacing(5),
  textDecoration: 'underline',
  fontWeight: 600,
  textAlign: 'center',
}));

const SubTitle = styled('h4')(({ theme }) => ({
  ...theme.typography.h3,
}));
