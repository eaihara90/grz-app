import { ButtonHTMLAttributes } from "react";

import './Button.scss';

interface GrzButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'danger' | 'secondary';
}

export function GrzButton({ children, size = 'md', theme = 'primary', ...props }: GrzButtonProps): JSX.Element {
  return (
    <button {...props}
      className={`grz-btn grz-btn--${theme} ${size}`}>
      {children}
    </button>
  );
}