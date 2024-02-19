import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './favorites.scss';
import { PageWrapper } from 'src/ui/compounds/page-wrapper/page-wrapper';
import { getFavoriteFolder } from 'src/mock/favorite-folders';
import { Folder } from 'src/ui/compounds/folder/folder';
import { FavoriteFolderModel } from 'src/models/favorites/favorite-folder.model';
import { FavoriteCard } from 'src/ui/compounds/favorite-card/favorite-card';
import { GrzButtonOptions } from 'src/ui/atoms/buttons';


export function FavoritesPage(): JSX.Element {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [content, setContent] = useState<FavoriteFolderModel>(new FavoriteFolderModel());
  const [loading, setLoading] = useState(false);

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
          <GrzButtonOptions label="Add new" size="sm" options={['Folder' , 'Favorite']} onSelection={(_selection) => console.log(_selection)} />
        </div>

        <div className="favorites-page__content">
          { (!loading && content!.folders?.length > 0) && content?.folders?.map((folder, i) => <Folder key={i} title={folder.title} path={`/favorites?id=${folder.path}`} />) }
          { (!loading && content!.favorites?.length > 0) && content?.favorites?.map((favorite, i) => <FavoriteCard key={i} title={favorite.title} url={favorite.url || ''}/>)}
        </div>
      </div>
    </PageWrapper>
  );
}