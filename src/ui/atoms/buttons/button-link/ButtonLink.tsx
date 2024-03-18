import { ReactNode } from "react";

import './ButtonLink.scss';
import { Link } from "react-router-dom";

interface GrzButtonLinkProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'primary' | 'danger' | 'secondary';
  to: string;
}

export function GrzButtonLink({ children, size = 'md', theme = 'primary', to }: GrzButtonLinkProps): JSX.Element {
  return (
    <Link to={to}
      className={`grz-btn-link grz-btn-link--${theme} ${size}`}>
      {children}
    </Link>
  );
}