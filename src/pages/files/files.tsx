import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './files.scss';
import { PageWrapper } from 'src/ui/compounds/page-wrapper/page-wrapper';
import { FolderTree } from "src/ui/compounds/folder-tree/folder-tree";

export function FilesPage(): JSX.Element {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [folderContent, setFolderContent] = useState([]);

  useEffect(() => {
    loadFolderContent();
  }, []);

  const loadFolderContent = async (): Promise<void> => {
    try {
      // const response = await fetch(`http://localhost:3005/api/folders?id=${id}`);
      const response = await fetch(`http://localhost:3000/folderTrees/${id}`);
      const data = await response.json();
      console.log(data);
      setFolderContent(data.content);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PageWrapper title="File Management">
      <FolderTree content={folderContent}/>
    </PageWrapper>
  );
}