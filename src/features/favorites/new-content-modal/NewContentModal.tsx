import './NewContentModal.scss';
import { Modal } from '../../../ui/compounds/modal/Modal';
import { ChangeEvent, useState } from 'react';
import { GrzInput } from 'src/ui/atoms/input/Input';
import { GrzButton } from 'src/ui/atoms/buttons';
import { GrzSelect } from 'src/ui/atoms/select/Select';
import { FavoriteModel } from 'src/models/favorites/favorite.model';
import { saveFavorite } from 'src/mock/favorite-folders';

interface NewContentModalProps {
  onClose: () => void;
  path: string;
}

export function NewContentModal({ onClose, path }: NewContentModalProps): JSX.Element {
  const [contentType, setContentType] = useState<string>('');
  const [favorite, setFavorite] = useState<FavoriteModel>(new FavoriteModel('', '', '', ''));
  
  const handleFavoriteInputData = (ev: ChangeEvent<HTMLInputElement>): void => {
    setFavorite(_prev => ({
      ..._prev,
      [ev.target.name]: ev.target.value
    }));
  }

  const handleContentType = (ev: ChangeEvent<HTMLSelectElement>): void =>  {
    if (ev.target.value === contentType) {
      return;
    }
    
    setContentType(ev.target.value);
    setFavorite(new FavoriteModel('', '', '', ''));
  }

  const handleSaveContent = (): void => {
    saveFavorite(favorite, path).then((response) => console.log(response));
  }

  return (
    <Modal
      onClose={onClose}>
      <div className="new-content">
        <h3 className="new-content__title">Create a new content</h3>

        <form className="form" onSubmit={(ev) => ev.preventDefault()}>
          <div className="input-container">
            <label htmlFor="content-type">Content type</label>
            <GrzSelect name="content-type" id="content-type" value={contentType} onChange={handleContentType}>
              <option disabled value=""></option>
              <option value="folder">Folder</option>
              <option value="favorite">Favorite</option>
            </GrzSelect>
          </div>

          { contentType === 'folder' &&
            <>
              <div className="input-container">
                <label htmlFor="folder-name">Folder name</label>
                <GrzInput type="text" id="folder-name" />
              </div>
            </>
          }
          
          { contentType === 'favorite' &&
            <>
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
            </>
          }

          <div className={`form__action-buttons ${contentType === 'favorite' ? 'end-buttons' : ''} `}>
            <GrzButton size="sm" onClick={onClose}>Cancel</GrzButton>
            <GrzButton disabled={!contentType} size="sm" onClick={handleSaveContent}>Save</GrzButton>
          </div>
        </form>
      </div>
    </Modal>
  );
}