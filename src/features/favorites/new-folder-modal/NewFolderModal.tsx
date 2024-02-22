import { useState } from 'react';

import './NewFolderModal.scss';
import { Modal } from 'src/ui/compounds';
import { GrzButton, GrzInput } from 'src/ui/atoms';

interface NewFolderModal {
  currentPath: string;
  onClose: () => void;
}

export function NewFolderModal({ currentPath, onClose }: NewFolderModal): JSX.Element {
  const [folderTitle, setFolderTitle] = useState<string>('');

  const saveFolder = (): void => {
    currentPath
  }

  return (
    <Modal
      onClose={onClose}
      title="Create a new folder">
      <div className="new-folder">

        <form className="new-folder__form" onSubmit={(ev) => ev.preventDefault()}>
          <div className="input-container">
            <label className="input-label" htmlFor="folder-name">Folder name</label>
            <GrzInput type="text" id="folder-name" value={folderTitle} onChange={(ev) => setFolderTitle(ev.target.value)}/>
          </div>

          <div className={`action-buttons`}>
            <GrzButton size="sm" theme="secondary" onClick={onClose}>Cancel</GrzButton>
            <GrzButton disabled={!folderTitle} size="sm" onClick={saveFolder}>Save</GrzButton>
          </div>
        </form>
      </div>
    </Modal>
  );
}