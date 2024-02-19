// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// import './files.scss';
// import { PageWrapper } from 'src/ui/compounds/page-wrapper/page-wrapper';
// import { getFolders } from 'src/mock/folders';
// import { Folder } from 'src/ui/compounds/folder/folder';
// import { File } from 'src/ui/compounds/file/file';
// import { FolderModel } from 'src/models/file-management/file-management.model';

// export function FilesPage(): JSX.Element {
//   const location = useLocation();
//   const id = new URLSearchParams(location.search).get('id');
//   const [content, setContent] = useState<FolderModel>(new FolderModel());
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     loadFolderContent();
//   }, [id]);

//   const loadFolderContent = async (): Promise<void> => {
//     setLoading(true);

//     try {
//       const response = await fetch(`http://localhost:3005/api/folders?id=${id}`);
//       const response = await fetch(`http://localhost:3000/folders/${id}`);
//       const data = await response.json();
//       const folder: FolderModel = await getFolders(id || 'root');
//       console.log(folder);
//       setContent(folder);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }

//   return (
//     <PageWrapper title="File Management">
//       <div className="file-management">
//         { (!loading && content!.folders?.length > 0) && content?.folders?.map((folder, i) => <Folder key={i} title={folder.title} path={folder.path}/>) }
//         { (!loading && content!.files?.length > 0) && content?.files?.map((file, i) => <File key={i} title={file.title} url={file.url}/>)}
//       </div>
//     </PageWrapper>
//   );
// }