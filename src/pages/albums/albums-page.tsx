import { PageWrapper } from 'src/ui/compounds/page-wrapper/page-wrapper';
import './albums-page.scss';
import { useEffect, useState } from 'react';

export function AlbumsPage(): JSX.Element {
  const [albums, setAlbums] = useState([]);

  useEffect(() => loadAlbums(), []);

  const loadAlbums = (): void => {
    
  }

  return (
    <PageWrapper title="Albums">
      { albums.length ?
        <div className="albums-list"></div>
        : null
      }
    </PageWrapper>
  );
}