import { useState } from 'react';

import './FavoriteCard.scss';
import { ConfirmationDialog } from 'src/ui/compounds';
import { GrzIconButton } from 'src/ui/atoms/buttons';
import { FavoriteModel } from 'src/models/favorites/favorite.model';

interface FavoriteCardProps {
  favorite: FavoriteModel;
  onRemoveFavorite: (_id: string) => void;
}


export function FavoriteCard({ favorite, onRemoveFavorite }: FavoriteCardProps): JSX.Element {
  const [isOpenRemoveConfirmationDialog, setIsOpenRemoveConfirmationDialog] = useState<boolean>(false);
  
  return (
    <div className="favorite-card">
      <i className="ph ph-file favorite-card__icon"></i>
      <p className="favorite-card__title">{favorite.title}</p>
      <div className="favorite-card__actions">
        <GrzIconButton size="md">
          <a target="_blank" href={favorite.url} className="link"><i className="ph ph-arrow-square-out"></i></a>
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
          onConfirm={() => onRemoveFavorite(favorite._id)}>
          Type "remove" and click confirm to remove this favorite
        </ConfirmationDialog>
      }
    </div>
  );
}