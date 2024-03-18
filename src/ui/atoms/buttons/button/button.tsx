import { ButtonHTMLAttributes, ReactNode } from "react";

import './Button.scss';

interface GrzButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
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