import Link from 'next/link';
import AnchorMaterial from '@mui/material/Link';
import { styled, Theme } from '@mui/material';

interface LinkDAProps {
  href: string;
  children: React.ReactNode;
  activeText?: boolean;
  sx?: any;
  target?: string;
}

interface AnchorProps {
  activeText: boolean;
  theme?: Theme;
}

const LinkDa = ({
  href,
  children,
  activeText = false,
  target,
  sx,
  ...rest
}: LinkDAProps): JSX.Element => {
  return (
    <Link href={href} passHref>
      <Anchor
        href={href}
        target={target || undefined}
        activeText={activeText}
        {...rest}
        sx={sx}
      >
        {children}
      </Anchor>
    </Link>
  );
};

export default LinkDa;

const Anchor = styled(AnchorMaterial, {
  shouldForwardProp: (prop) => prop !== 'activeText',
})(({ theme, activeText }: AnchorProps) => {
  return {
    textDecoration: 'none',
    cursor: 'pointer',
    color: activeText
      ? theme?.palette.secondary.dark
      : theme?.palette.common.white,
    position: 'relative',
  };
});
