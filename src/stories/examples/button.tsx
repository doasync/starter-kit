/* stylelint-disable value-keyword-case */

import './button.css';

import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor: color,
  label,
  onClick,
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  // noinspection Stylelint
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
