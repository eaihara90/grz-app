import ReactDOM from 'react-dom';

import './Modal.scss';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  children: ReactNode;
  height?: string;
  onClose: () => void;
  width?: string;
}

export function Modal({ children, onClose, height, width }: ModalProps): JSX.Element {
  const handleKeyDown = (ev: KeyboardEvent): void => {
    switch (ev.code) {
      case 'Escape':
        onClose();
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    ReactDOM.createPortal(
      <>
        <div className="backdrop" onClick={onClose}></div>
        <div className="modal" style={{ height, width }}>
          {children}
        </div>
      </>,
      document.querySelector('#modal-root')!
    )
  );
}