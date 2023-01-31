import {
  Button,
  CircularProgress,
  IconButton,
  styled,
  TextField,
  Tooltip,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialStateForm = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

const Contact = () => {
  const [valuesForm, setValuesForm] = useState(initialStateForm);

  const [statusForm, setStatusForm] = useState({
    loading: false,
    success: false,
  });

  const form = useRef(null);

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    const emailRegex = /([1-9])+/g;

    if (name !== '') {
      setValuesForm({ ...valuesForm, [name]: value });
    }

    switch (name) {
      case 'fullName':
        if (value.length < 3) {
          setErrors({
            ...errors,
            fullName: 'El nombre debe tener al menos 3 caracteres',
          });
        } else {
          setErrors({
            ...errors,
            fullName: '',
          });
        }
        break;
      case 'email':
        if (!emailRegex.test(value)) {
          setErrors({ ...errors, email: 'Debe ser un email correcto' });
        } else {
          setErrors({
            ...errors,
            email: '',
          });
        }
        break;
      case 'phone':
        if (value.length < 8) {
          setErrors({
            ...errors,
            phone: 'El telefono debe tener al menos 8 caracteres',
          });
        } else {
          setErrors({
            ...errors,
            phone: '',
          });
        }
        break;
      case 'message':
        if (value.length < 10) {
          setErrors({
            ...errors,
            message: 'El mensaje debe tener al menos 10 caracteres',
          });
        } else {
          setErrors({
            ...errors,
            message: '',
          });
        }
        break;
      default:
        break;
    }
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, email, phone, message } = valuesForm;

    if (fullName !== '' && email !== '' && phone !== '' && message !== '') {
      setStatusForm({ ...statusForm, loading: true });
      await axios.post(
        'https://server-email-da.herokuapp.com/users',
        valuesForm,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setStatusForm({
        loading: false,
        success: true,
      });

      setValuesForm(initialStateForm);

      toast.success('Tu consulta fue enviada con exito!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setErrors({
      fullName: 'El nombre es requerido',
      email: 'El email es requerido',
      phone: 'El telefono es requerido',
      message: 'El mensaje es requerido',
    });
  };

  const loadingFetch = () => {
    if (statusForm.loading) {
      return (
        <CircularProgress color="inherit" sx={{ width: 18, height: 18 }} />
      );
    }

    if (statusForm.success) {
      return 'Enviado';
    }
    return 'Enviar';
  };

  useEffect(() => {
    if (statusForm.success) {
      setTimeout(() => {
        setStatusForm({ loading: false, success: false });
      }, 2000);

      setErrors({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  }, [statusForm]);

  return (
    <ContainerContact>
      <ContainerForm>
        <WrapperImage></WrapperImage>
        <WrapperForm>
          <TitleForm>Comunicate con nosotros</TitleForm>
          <Form ref={form}>
            <GroupTextField>
              <TextField
                fullWidth
                onChange={handleValues}
                name="fullName"
                id="filled-basic"
                type={'text'}
                label="Nombre Completo"
                variant="filled"
                value={valuesForm.fullName}
                error={!statusForm.success && errors.fullName !== ''}
                helperText={!statusForm.success && errors.fullName}
              />
            </GroupTextField>
            <GroupTextField>
              <Tooltip
                title="Ejemplo: 11533967.."
                sx={{ position: 'absolute', left: -40, top: 5 }}
              >
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
              <TextField
                fullWidth
                onChange={handleValues}
                name="phone"
                id="filled-basic"
                label="Telefono"
                variant="filled"
                type={'number'}
                value={valuesForm.phone}
                error={!statusForm.success && errors.phone !== ''}
                helperText={!statusForm.success && errors.phone}
              />
            </GroupTextField>
            <GroupTextField>
              <TextField
                fullWidth
                onChange={handleValues}
                name="email"
                id="filled-basic"
                label="Correo Electronico"
                variant="filled"
                type={'email'}
                value={valuesForm.email}
                error={!statusForm.success && errors.email !== ''}
                helperText={!statusForm.success && errors.email}
              />
            </GroupTextField>
            <GroupTextField>
              <TextField
                fullWidth
                onChange={handleValues}
                name="message"
                id="filled-basic"
                label="Mensaje"
                variant="filled"
                multiline
                rows={4}
                value={valuesForm.message}
                error={!statusForm.success && errors.message !== ''}
                helperText={!statusForm.success && errors.message}
              />
            </GroupTextField>
            <GroupTextField>
              <Button
                onClick={(e) => submitEmail(e)}
                variant="contained"
                color={'primary'}
              >
                {loadingFetch()}
              </Button>
            </GroupTextField>
          </Form>
        </WrapperForm>
      </ContainerForm>
    </ContainerContact>
  );
};

export default Contact;

const GroupTextField = styled('div')(({ theme }) => ({
  position: 'relative',
}));

const TitleForm = styled('h3')(({ theme }) => ({
  ...theme.typography.h3,
  fontSize: 30,
  color: theme.palette.primary.main,
  margin: 20,
}));

const Form = styled('form')(({ theme }) => ({
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  justifyContent: 'center',
}));

const WrapperImage = styled('div')(({ theme }) => ({
  background: `url("/images/form-contact/background.png") ${theme.palette.secondary.main} no-repeat center 36px`,
  backgroundSize: 'contain',
  objectFit: 'contain',
  width: '50%',
  height: '100%',
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

const ContainerForm = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '93%',
  minHeight: 550,
  borderRadius: 35,
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    minHeight: 350,
  },
}));

const WrapperForm = styled('div')(({ theme }) => ({
  background: theme.palette.secondary.main,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

const ContainerContact = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  paddingTop: 60,
  background: 'white',
  [theme.breakpoints.up('md')]: {
    paddingTop: 10,
    height: '80vh',
  },
}));
