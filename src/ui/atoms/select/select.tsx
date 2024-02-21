import { ReactNode, SelectHTMLAttributes } from 'react';

import './select.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export function GrzSelect({ children, fullWidth, ...props }: SelectProps): JSX.Element {
  return (
    <select {...props} className={`grz-select ${fullWidth ? 'full-width' : ''}`}>
      {children}
    </select>
  );
}