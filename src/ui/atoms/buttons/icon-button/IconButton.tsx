import { ButtonHTMLAttributes, ReactNode } from 'react';
import './IconButton.scss';

interface GrzIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'danger';
}

export function GrzIconButton({ children, size = 'md', theme = 'primary', ...props }: GrzIconButtonProps): JSX.Element {
  return (
    <button {...props}
      className={`icon-btn icon-btn--${theme} ${size}`}>
      {children}
    </button>
  );
}