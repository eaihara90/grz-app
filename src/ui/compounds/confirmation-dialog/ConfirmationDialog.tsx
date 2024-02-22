import './ConfirmationDialog.scss';
import { Modal } from '..';
import { GrzButton, GrzInput } from 'src/ui/atoms';
import { FormEvent, ReactNode, useState } from 'react';

interface ConfirmationDialogProps {
  children: ReactNode;
  confirmationText?: string;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  theme?: 'primary' | 'danger';
}

export function ConfirmationDialog({ children, confirmationText, onClose, onConfirm, title, theme = 'primary' }: ConfirmationDialogProps): JSX.Element {
  const [confirmationInput, setConfirmationInput] = useState<string>('');

  const handleSubmit = (ev: FormEvent<HTMLFormElement>): void => {
    ev.preventDefault();
    onConfirm();
  }

  return (
    <Modal onClose={onClose} title={title}>
      <div className="confirmation-dialog">
        <p className="confirmation-dialog__text">{ children }</p>
        { confirmationText &&
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <GrzInput placeholder={confirmationText} type="text" value={confirmationInput} onChange={(ev) => setConfirmationInput(ev.target.value)}/>
            </div>

            <div className="action-buttons">
              <GrzButton size="sm" onClick={onClose} theme={theme}>Cancel</GrzButton>
              <GrzButton size="sm" type="submit" disabled={confirmationText !== confirmationInput} theme={theme}>Confirm</GrzButton>
            </div>
          </form>
        }

        { !confirmationText &&
          <div className="action-buttons">
            <GrzButton size="sm" onClick={onClose} theme={theme}>Cancel</GrzButton>
            <GrzButton size="sm" type="button" onClick={onConfirm} theme={theme}>Confirm</GrzButton>
          </div>
        }
      </div>
    </Modal>
  );
}