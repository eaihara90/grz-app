import { ChangeEvent, useState } from 'react';

import './NewFavoriteModal.scss';
import { Modal } from 'src/ui/compounds';
import { GrzInput, GrzButton } from 'src/ui/atoms';
import { FavoriteModel } from 'src/models/favorites/favorite.model';
import { saveFavorite } from 'src/mock/favorite-folders';

interface NewContentModalProps {
  currentPath: string;
  onClose: () => void;
}

export function NewFavoriteModal({ onClose, currentPath }: NewContentModalProps): JSX.Element {
  const [favorite, setFavorite] = useState<FavoriteModel>(new FavoriteModel('', '', '', ''));
  
  const handleFavoriteInputData = (ev: ChangeEvent<HTMLInputElement>): void => {
    setFavorite(_prev => ({
      ..._prev,
      [ev.target.name]: ev.target.value
    }));
  }

  const handleSaveContent = (): void => {
    saveFavorite(favorite, currentPath).then((response) => console.log(response));
  }

  return (
    <Modal
      onClose={onClose} title="Create a new favorite">
      <div className="new-favorite">

        <form className="new-favorite__form" onSubmit={(ev) => ev.preventDefault()}>
          <div className="two-columns">
            <div className="input-container">
              <label htmlFor="favorite-title">Favorite title</label>
              <GrzInput type="text" id="favorite-title" name="title" fullWidth value={favorite.title} onChange={handleFavoriteInputData}/>
            </div>

            <div className="input-container">
              <label htmlFor="favorite-description">Description</label>
              <GrzInput type="text" id="favorite-description" name="description" fullWidth value={favorite.description} onChange={handleFavoriteInputData}/>
            </div>

            <div className="input-container">
              <label htmlFor="favorite-url">Url</label>
              <GrzInput type="text" id="favorite-url" name="url" fullWidth value={favorite.url} onChange={handleFavoriteInputData}/>
            </div>

            <div className="input-container">
              <label htmlFor="favorite-thumbnail-url">Thumbnail URL</label>
              <GrzInput type="text" id="favorite-thumbnail-url" name="thumbnailUrl" fullWidth value={favorite.thumbnailUrl} onChange={handleFavoriteInputData} />
            </div>
          </div>

          { favorite.thumbnailUrl.length > 10 &&
            <div className="thumbnail-url-preview">
              <img src={favorite?.thumbnailUrl} alt="" className="image"/>
            </div>
          }

          <div className={`action-buttons`}>
            <GrzButton size="sm" onClick={onClose}>Cancel</GrzButton>
            <GrzButton disabled={!favorite.title || !favorite.url} size="sm" onClick={handleSaveContent}>Save</GrzButton>
          </div>
        </form>
      </div>
    </Modal>
  );
}