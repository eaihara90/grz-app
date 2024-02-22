import { ConfirmationDialog } from 'src/ui/compounds';
import './FavoriteCard.scss';
import { GrzIconButton } from 'src/ui/atoms/buttons';
import { useState } from 'react';

interface FavoriteCardProps {
  title: string;
  url: string;
}


export function FavoriteCard({ title, url }: FavoriteCardProps): JSX.Element {
  const [isOpenRemoveConfirmationDialog, setIsOpenRemoveConfirmationDialog] = useState<boolean>(false);
  
  return (
    <div className="favorite-card">
      <i className="ph ph-file favorite-card__icon"></i>
      <p className="favorite-card__title">{title}</p>
      <div className="favorite-card__actions">
        <GrzIconButton size="md">
          <a target="_blank" href={url} className="link"><i className="ph ph-arrow-square-out"></i></a>
        </GrzIconButton>

        <GrzIconButton size="md">
          <i className="ph ph-pencil-simple-line"></i>
        </GrzIconButton>

        <GrzIconButton size="md" theme="danger" onClick={() => setIsOpenRemoveConfirmationDialog(true)}>
          <i className="ph ph-trash"></i>
        </GrzIconButton>
      </div>

      { isOpenRemoveConfirmationDialog &&
        <ConfirmationDialog
          title="Remove favorite"
          confirmationText="remove"
          theme="danger"
          onClose={() => setIsOpenRemoveConfirmationDialog(false)}
          onConfirm={() => console.log('Confirmado')}>
          Type "remove" and click confirm to remove this favorite
        </ConfirmationDialog>
      }
    </div>
  );
}