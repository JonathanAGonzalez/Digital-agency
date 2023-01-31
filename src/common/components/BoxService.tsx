import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { AnimationText } from '../../core/animations/fadeElement';

interface BoxServiceProps {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

const BoxService = ({ title, text, icon }: BoxServiceProps) => {
  return (
    <ContainerBox data-aos="fade-in">
      <IconBox>{icon}</IconBox>
      <TitleBox>{title}</TitleBox>
      <ParagraphBox>{text}</ParagraphBox>
    </ContainerBox>
  );
};

export default BoxService;

const ContainerBox = styled('div')(({ theme }) => ({
  padding: theme.spacing(5, 2),
}));

const TitleBox = styled(Typography)(({ theme }) => ({
  ...theme.typography.h3,
  fontWeight: '600',
  fontSize: 30,
  position: 'relative',
  marginBottom: 3,
  animation: `${AnimationText} 1s ease-in-out`,
  ['::before']: {
    content: "' '",
    display: 'block',
    height: '5px',
    width: '60px',
    background: theme.palette.primary.main,
    position: 'absolute',
    bottom: 0,
    marginBottom: -1,
  },
}));

const ParagraphBox = styled('p')(({ theme }) => ({
  fontWeight: '400',
  marginTop: 20,
}));

const IconBox = styled('div')(({ theme }) => ({
  svg: {
    fontSize: '45px',
  },
}));
