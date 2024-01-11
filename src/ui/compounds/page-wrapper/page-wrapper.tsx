import { ReactNode } from 'react';
import './page-wrapper.scss';

interface PageWrapperProps {
  children: ReactNode;
  title: string;
}

export function PageWrapper({ children, title }: PageWrapperProps): JSX.Element {
  return (
    <main className="main-wrapper">
      <h2>{title}</h2>

      {children}
    </main>
  );
}