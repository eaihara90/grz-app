import { ButtonHTMLAttributes } from "react";

import './button.scss';

interface GrzButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: 'sm' | 'md' | 'lg';
}

export function GrzButton({ children, size = 'md', ...props }: GrzButtonProps): JSX.Element {
  return (
    <button {...props}
      className={`grz-btn ${size}`}>
      {children}
    </button>
  );
}