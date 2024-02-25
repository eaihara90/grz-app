import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Favorites.scss';
import { favoriteHttpService } from 'src/services/favorite-http.service';
import { FavoriteFolderModel } from 'src/models/favorites/favorite-folder.model';
import { EmptyContent, PageWrapper } from 'src/ui/compounds';
import { GrzButtonOptions } from 'src/ui/atoms';
import { FavoriteCard, FavoriteFolderCard, NewFavoriteModal, NewFolderModal } from 'src/features/favorites';

export function FavoritesPage(): JSX.Element {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id') || '';
  const [content, setContent] = useState<FavoriteFolderModel>(new FavoriteFolderModel());
  const [loading, setLoading] = useState(false);
  const [newContentModal, setNewContentModal] = useState<{ open: boolean, type: string }>({ open: false, type: '' });

  useEffect(() => {
    loadFolderContent();
  }, [id]);

  const loadFolderContent = async (): Promise<void> => {
    setLoading(true);

    favoriteHttpService.getFavoriteFolderContent(id || 'root')
    .then((_response) => _response.json())
    .then(({ folder }) => {
      setContent(folder);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }

  const handleOpenModal = (_selection: string): void => {
    setNewContentModal({ open: true, type: _selection.toLowerCase() });
  }

  const handleRemoveFolder = (_id: string): void => {

  }

  const handleRemoveFavorite = (_id: string): void => {

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
          { (!loading && content!.folders?.length > 0) && content?.folders?.map((folder, i) => (
            <FavoriteFolderCard key={i} folder={folder} onRemoveFolder={handleRemoveFolder}/>
          ))}
          { (!loading && content!.favorites?.length > 0) && content?.favorites?.map((favorite, i) => (
            <FavoriteCard key={i} favorite={favorite} onRemoveFavorite={handleRemoveFavorite}/>
          ))}

          { (!loading && !content.folders?.length && !content.favorites?.length) &&
            <EmptyContent text="Empty folder">
              <i className="ph ph-folder-simple-dashed"></i>
            </EmptyContent>
          }
        </div>
      </div>

      { (newContentModal.open && newContentModal.type === 'folder')  && 
        <NewFolderModal onClose={() => setNewContentModal({ open: false, type: '' })} currentPathId={id}/>
      }
      { (newContentModal.open && newContentModal.type === 'favorite')  && 
        <NewFavoriteModal onClose={() => setNewContentModal({ open: false, type: '' })} currentPathId={id}/>
      }
    </PageWrapper>
  );
}