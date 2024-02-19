import './new-content-modal.scss';
import { Modal } from '../modal/modal';
import { useState } from 'react';
import { GrzInput } from 'src/ui/atoms/input/input';

interface NewContentModalProps {
  onClose: () => void;
}

export function NewContentModal({ onClose }: NewContentModalProps): JSX.Element {
  const [contentType, setContentType] = useState<string>('');
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

  return (
    <Modal
      height='80%'
      width='70%'
      onClose={onClose}>
      <div className="new-content">
        <h3 className="new-content__title">Create a new content</h3>

        <form className="form">
          <div className="input-container">
            <label htmlFor="content-type">Content type</label>
            <select className="grz-input" name="content-type" id="content-type" value={contentType} onChange={(ev) => setContentType(ev.target.value)}>
              <option disabled value=""></option>
              <option value="folder">Folder</option>
              <option value="favorite">Favorite</option>
            </select>
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
                  <label htmlFor="favorite-name">Favorite name</label>
                  <GrzInput type="text" id="favorite-name" fullWidth/>
                </div>

                <div className="input-container">
                  <label htmlFor="favorite-url">Url</label>
                  <GrzInput type="text" id="favorite-url" fullWidth/>
                </div>

                <div className="input-container">
                  <label htmlFor="favorite-description">Description</label>
                  <GrzInput type="text" id="favorite-description" fullWidth/>
                </div>

                <div className="input-container">
                  <label htmlFor="favorite-thumbnail-url">Thumbnail URL</label>
                  <GrzInput type="text" id="favorite-thumbnail-url" fullWidth value={thumbnailUrl} onChange={(ev) => setThumbnailUrl(ev.target.value)} />
                </div>
              </div>

              { thumbnailUrl.length > 10 &&
                <div className="thumbnail-url-preview">
                  <img src={thumbnailUrl} alt="" className="image"/>
                </div>
              }
            </>
          }
        </form>
      </div>
    </Modal>
  );
}