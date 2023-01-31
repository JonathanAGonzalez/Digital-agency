import { keyframes } from '@emotion/react';
import { styled, Theme } from '@mui/material';

interface WidgerRightProps {
  size: string;
  theme?: Theme;
  background?: string;
  animationSeconds: number;
  hiddenElement: boolean;
}

interface WidgetProps {
  theme?: Theme;
  animationSeconds: number;
  background?: string;
}

interface WidgetLeftProps {
  theme?: Theme;
  animationSeconds: number;
  hiddenElement: boolean;
}

export const animationWidget = keyframes`
    0% {
      transform: rotate(45deg) translateX(0px);
    }
    100% {
      transform: rotate(45deg) translateX(15px);
    }
  `;

export const WidgetLeft = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'animationSeconds' && prop !== 'hiddenElement',
})(({ theme, animationSeconds, hiddenElement }: WidgetLeftProps) => ({
  height: 400,
  width: 400,
  borderRadius: 30,
  border: `2px solid ${theme?.palette.primary.main}`,
  position: 'absolute',
  top: 'calc(50% - 400px /2 )',
  left: -300,
  transform: 'rotate(45deg)',
  animation: `${animationWidget} ${animationSeconds}s ease-in-out infinite alternate`,
  display: hiddenElement ? 'none' : 'block',
}));

const sizeCalculationWidget = (size: string) => {
  switch (size) {
    case 'small':
      return '400px';
    case 'medium':
      return '450px';
    case 'large':
      return '500px';
    default:
      return '400px';
  }
};

export const WidgetRight = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'size' &&
    prop !== 'background' &&
    prop !== 'animationSeconds' &&
    prop !== 'hiddenElement',
})(
  ({
    theme,
    size,
    background,
    animationSeconds,
    hiddenElement,
  }: WidgerRightProps) => ({
    height: sizeCalculationWidget(size),
    width: sizeCalculationWidget(size),
    background: background ? background : theme?.palette.primary.main,
    borderRadius: 30,
    border: `2px solid ${theme?.palette.primary.main}`,
    position: 'absolute',
    top: `calc(40% - ${sizeCalculationWidget(size)} /2 )`,
    right: -300,
    transform: 'rotate(45deg)',
    animation: `${animationWidget} ${animationSeconds}s ease-in-out infinite alternate`,
    display: hiddenElement ? 'none' : 'block',
  })
);

export const WidgetTop = styled('div', {
  shouldForwardProp: (prop) => prop !== 'animationSeconds',
})(({ theme, animationSeconds }: WidgetProps) => ({
  height: 200,
  width: 200,
  borderRadius: 30,
  background: theme?.palette.grey[900],
  position: 'absolute',
  top: -199,
  right: 'calc(60% - 200px /2 )',
  transform: 'rotate(45deg)',
  animation: `${animationWidget} ${animationSeconds}s ease-in-out infinite alternate`,
}));

export const WidgetBottom = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'animationSeconds' && prop !== 'background',
})(({ theme, animationSeconds, background }: WidgetProps) => ({
  height: 200,
  width: 200,
  borderRadius: 30,
  background: background ? background : theme?.palette.common.white,
  position: 'absolute',
  bottom: -100,
  right: 'calc(40% - 200px /2 )',
  transform: 'rotate(45deg)',
  zIndex: 10,
  animation: `${animationWidget} ${animationSeconds}s ease-in-out infinite alternate`,
}));
