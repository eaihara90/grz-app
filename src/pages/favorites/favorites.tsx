import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Favorites.scss';
import { getFavoriteFolder } from 'src/mock/favorite-folders';
import { FavoriteFolderModel } from 'src/models/favorites/favorite-folder.model';
import { PageWrapper } from 'src/ui/compounds';
import { GrzButtonOptions } from 'src/ui/atoms';
import { FavoriteCard, FavoriteFolderCard, NewFavoriteModal, NewFolderModal } from 'src/features/favorites';

export function FavoritesPage(): JSX.Element {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [content, setContent] = useState<FavoriteFolderModel>(new FavoriteFolderModel());
  const [loading, setLoading] = useState(false);
  const [newContentModal, setNewContentModal] = useState<{ open: boolean, type: string }>({ open: false, type: '' });

  useEffect(() => {
    loadFolderContent();
  }, [id]);

  const loadFolderContent = async (): Promise<void> => {
    setLoading(true);

    try {
      // const response = await fetch(`http://localhost:3005/api/folders?id=${id}`);
      // const response = await fetch(`http://localhost:3000/folders/${id}`);
      // const data = await response.json();
      const folder: FavoriteFolderModel = await getFavoriteFolder(id || 'root');
      console.log(folder);
      setContent(folder);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleOpenModal = (_selection: string): void => {
    setNewContentModal({ open: true, type: _selection.toLowerCase() });
  }

  return (
    <PageWrapper title="Favorites">
      <div className="favorites-page">
        <div className="favorites-page__header">
          <GrzButtonOptions
            options={['Folder', 'Favorite']}
            label="Add new"
            size="sm"
            onSelection={handleOpenModal}
          />
        </div>

        <div className="favorites-page__content">
          { (!loading && content!.folders?.length > 0) && content?.folders?.map((folder, i) => <FavoriteFolderCard key={i} title={folder.title} path={`/favorites?id=${folder.path}`} />) }
          { (!loading && content!.favorites?.length > 0) && content?.favorites?.map((favorite, i) => <FavoriteCard key={i} title={favorite.title} url={favorite.url || ''}/>)}
        </div>
      </div>

      {(newContentModal.open && newContentModal.type === 'folder')  && <NewFolderModal onClose={() => setNewContentModal({ open: false, type: '' })} currentPath={id}/>}
      {(newContentModal.open && newContentModal.type === 'favorite')  && <NewFavoriteModal onClose={() => setNewContentModal({ open: false, type: '' })} currentPath={id}/>}
    </PageWrapper>
  );
}