import { ButtonHTMLAttributes, ReactNode } from 'react';
import './IconButton.scss';

interface GrzIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function GrzIconButton({ children, size = 'md', ...props }: GrzIconButtonProps): JSX.Element {
  return (
    <button {...props}
      className={`icon-btn ${size}`}>
      {children}
    </button>
  );
}