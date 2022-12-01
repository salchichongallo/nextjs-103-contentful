import clsx from 'clsx';
import React from 'react';
import styles from './Button.module.scss';

interface Props {
  isFluid?: boolean;
  children?: React.ReactNode;
  className?: string;
  size?: 'large' | 'medium' | 'small';
}

export function Button({
  isFluid,
  className,
  size = 'large',
  ...restProps
}: Props) {
  const classes = clsx(
    styles.button,
    styles[`size--${size}`],
    {
      [styles.isFluid]: isFluid,
    },
    className,
  );
  return <button type="button" className={classes} {...restProps} />;
}
