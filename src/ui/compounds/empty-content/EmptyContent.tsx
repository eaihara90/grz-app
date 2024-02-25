import { ReactNode } from 'react';
import './EmptyContent.scss';

interface EmptyContentProps {
  children?: ReactNode;
  text: string;
}

export function EmptyContent({ children, text }:EmptyContentProps ): JSX.Element {
  return (
    <div className="empty-content">
      <div className="empty-content__icon">
        {children}
      </div>
      <p className="empty-content__text">{ text }</p>
    </div>
  );
}