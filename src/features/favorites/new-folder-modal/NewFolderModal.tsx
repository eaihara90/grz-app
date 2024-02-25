import { useState } from 'react';

import './NewFolderModal.scss';
import { Modal } from 'src/ui/compounds';
import { GrzButton, GrzInput } from 'src/ui/atoms';
import { favoriteHttpService } from 'src/services/favorite-http.service';

interface NewFolderModal {
  currentFolder: { id: string, path: string };
  onClose: () => void;
}

export function NewFolderModal({ currentFolder, onClose }: NewFolderModal): JSX.Element {
  const [folderTitle, setFolderTitle] = useState<string>('');
  console.log(currentFolder);

  function formatPath(_path: string, _newPath: string): string {
    let newPath = _path;

    const tempPaths = _newPath.toLowerCase().split(' ');
    newPath += `/${tempPaths.join('_')}`;

    return newPath;
  }
  const saveFolder = (): void => {
    const newFolder = {
      files: [],
      folders: [],
      title: folderTitle,
      path: formatPath(currentFolder.path, folderTitle),
      parentFolderId: currentFolder.id
    };

    favoriteHttpService.saveFavoriteFolder(newFolder)
    .then((_response) => _response.json())
    .then((_response) => {
      console.log(_response);
    })
    .catch(error => {
      console.log(error);
      // setLoading(false);
    });
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