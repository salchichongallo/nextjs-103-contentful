import { CSS } from '@stitches/react';
import styled from '../styles/styled';
import { workSansFont } from '../styles/fonts';

const resetStyles: CSS = {
  padding: 0,
  border: 0,
  userSelect: 'none',
  appearance: 'none',
  cursor: 'pointer',
};

const fonts: Record<string, CSS> = {
  button2: {
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: workSansFont.style.fontFamily,
  },
};

export const Button = styled('button', {
  ...resetStyles,
  ...fonts.button2,
  fontWeight: 500,
  paddingLeft: 8,
  paddingRight: 8,
  textAlign: 'center',

  variants: {
    compact: {
      false: {
        width: '100%',
      },
    },
    variant: {
      primary: {
        background: '$yellow300',
        '&:hover': {
          background: '$yellow200',
        },
        '&:active': {
          background: '$black',
          color: '$white',
        },
      },
    },
    size: {
      large: {
        height: 60,
        borderRadius: 12,

        fontSize: 18,
        lineHeight: '24px',
      },
      medium: {
        height: 48,
        borderRadius: 8,
      },
      small: {
        height: 28,
        borderRadius: 8,
      },
    },
  },

  compoundVariants: [
    {
      size: 'medium',
      compact: true,
      css: {
        minWidth: 196,
      },
    },
    {
      size: 'large',
      compact: true,
      css: {
        minWidth: 228,
      },
    },
  ],

  defaultVariants: {
    compact: false,
    variant: 'primary',
    size: 'medium',
  },
});

Button.toString = () => 'Button';
Button.displayName = 'Button';
