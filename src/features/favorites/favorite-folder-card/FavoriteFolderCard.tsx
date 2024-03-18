import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import './FavoriteFolderCard.scss';
import { GrzIconButton } from 'src/ui/atoms/buttons';
import { ConfirmationDialog } from 'src/ui/compounds';
import { FavoriteFolderModel } from 'src/models/favorites/favorite-folder.model';

interface FavoriteFolderCardProps {
  folder: FavoriteFolderModel;
  onRemoveFolder: (_id: string) => void;
}

export function FavoriteFolderCard({ folder, onRemoveFolder }: FavoriteFolderCardProps): JSX.Element {
  const [isOpenRemoveConfirmationDialog, setIsOpenRemoveConfirmationDialog] = useState<boolean>(false);

  const handleRemoveFolder = (ev: MouseEvent<HTMLButtonElement>): void => {
    console.log("🚀 ~ handleRemoveFolder ~ ev:", ev)
    ev.stopPropagation();
    ev.preventDefault();
    setIsOpenRemoveConfirmationDialog(true);
  }

  return (
    <>
      <Link to={`/favorites?id=${folder._id}`} className="favorite-folder-card">
        <i className="ph ph-folder-simple favorite-folder-card__icon"></i>
        <p className="favorite-folder-card__title">{folder.title}</p>

        <div className="favorite-folder-card__actions">
          <GrzIconButton size="md" onClick={(ev) => ev.preventDefault()}>
            <i className="ph ph-pencil-simple-line"></i>
          </GrzIconButton>

          <GrzIconButton size="md" theme="danger" onClick={handleRemoveFolder}>
            <i className="ph ph-trash"></i>
          </GrzIconButton>
        </div>
      </Link>
    
      { isOpenRemoveConfirmationDialog &&
        <ConfirmationDialog
          title="Remove favorite"
          confirmationText="remove"
          theme="danger"
          onClose={() => setIsOpenRemoveConfirmationDialog(false)}
          onConfirm={() => onRemoveFolder(folder._id)}>
          Type "remove" and click confirm to remove this favorite
        </ConfirmationDialog>
      }
    </>
  );
}