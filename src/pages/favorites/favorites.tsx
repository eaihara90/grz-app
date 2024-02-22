import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Favorites.scss';
import { getFavoriteFolder } from 'src/mock/favorite-folders';
import { FavoriteFolderModel } from 'src/models/favorites/favorite-folder.model';
import { PageWrapper } from 'src/ui/compounds/page-wrapper/PageWrapper';
import { FolderCard } from 'src/features/files/folder-card/FolderCard';
import { FavoriteCard } from 'src/features/favorites/favorite-card/FavoriteCard';
import { GrzButton } from 'src/ui/atoms/buttons';
import { NewContentModal } from 'src/features/favorites/new-content-modal/NewContentModal';


export function FavoritesPage(): JSX.Element {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [content, setContent] = useState<FavoriteFolderModel>(new FavoriteFolderModel());
  const [loading, setLoading] = useState(false);
  const [isOpenAddNewModal, setIsOpenAddNewModal] = useState<boolean>(false);

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

  return (
    <PageWrapper title="Favorites">
      <div className="favorites-page">
        <div className="favorites-page__header">
          <GrzButton size="sm" onClick={() => setIsOpenAddNewModal(true)}>Add new</GrzButton>
        </div>

        <div className="favorites-page__content">
          { (!loading && content!.folders?.length > 0) && content?.folders?.map((folder, i) => <FolderCard key={i} title={folder.title} path={`/favorites?id=${folder.path}`} />) }
          { (!loading && content!.favorites?.length > 0) && content?.favorites?.map((favorite, i) => <FavoriteCard key={i} title={favorite.title} url={favorite.url || ''}/>)}
        </div>
      </div>

      {isOpenAddNewModal && <NewContentModal onClose={() => setIsOpenAddNewModal(false)} path={id}/> }
    </PageWrapper>
  );
}