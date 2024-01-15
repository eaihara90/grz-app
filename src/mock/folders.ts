export function getFolders(path: string) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(tempFolders.filter(folder => folder.path === path))
    }, 1000);
  });
}

const tempFolders = [
  {
    id: '1',
    title: 'Root',
    files: [],
    folders: [],
    path: 'root'
  },
  {
    id: '2',
    title: 'Folder 2',
    files: [],
    folders: [],
    path: 'root'
  },
  {
    id: '2',
    title: 'Folder 3',
    files: [],
    folders: [],
    path: 'root/folder_1'
  }
]

// {
//   "files": [
//       {
//           "key": "edu_teste_smartrm_upload_file.txt",
//           "last_modified": "2023-03-07T13:42:34+00:00",
//           "size": 29
//       },
//       {
//           "key": "edu_teste_smartrm_upload_file_02.txt",
//           "last_modified": "2023-03-07T13:45:43+00:00",
//           "size": 29
//       },
//       {
//           "key": "edu_teste_smartrm_upload_file_03.txt",
//           "last_modified": "2023-03-07T13:47:29+00:00",
//           "size": 29
//       },
//       {
//           "key": "internal_services.txt",
//           "last_modified": "2022-12-17T02:13:23+00:00",
//           "size": 573
//       },
//       {
//           "key": "internal_services2.txt",
//           "last_modified": "2022-12-19T17:54:55+00:00",
//           "size": 573
//       },
//       {
//           "key": "internal_services3.txt",
//           "last_modified": "2022-12-19T17:59:19+00:00",
//           "size": 573
//       },
//       {
//           "key": "seginfo.txt",
//           "last_modified": "2022-02-08T18:27:26+00:00",
//           "size": 0
//       }
//   ],
//   "folders": [
//       {
//           "folder_name": "edu_pasta_root_02",
//           "folder_path": "filemanager/smartrm_filemanager/edu_pasta_root_02/",
//           "folder_size": null,
//           "total_files": null,
//           "folder_path_querystring": "filemanager/smartrm_filemanager/edu_pasta_root_02/"
//       },
//       {
//           "folder_name": "evidencia_subpasta",
//           "folder_path": "filemanager/smartrm_filemanager/evidencia_subpasta/",
//           "folder_size": null,
//           "total_files": null,
//           "folder_path_querystring": "filemanager/smartrm_filemanager/evidencia_subpasta/"
//       },
//       {
//           "folder_name": "guag8",
//           "folder_path": "filemanager/smartrm_filemanager/guag8/",
//           "folder_size": null,
//           "total_files": null,
//           "folder_path_querystring": "filemanager/smartrm_filemanager/guag8/"
//       },
//       {
//           "folder_name": "guga10",
//           "folder_path": "filemanager/smartrm_filemanager/guga10/",
//           "folder_size": null,
//           "total_files": null,
//           "folder_path_querystring": "filemanager/smartrm_filemanager/guga10/"
//       },
//       {
//           "folder_name": "guga5",
//           "folder_path": "filemanager/smartrm_filemanager/guga5/",
//           "folder_size": null,
//           "total_files": null,
//           "folder_path_querystring": "filemanager/smartrm_filemanager/guga5/"
//       },
//       {
//           "folder_name": "guga7",
//           "folder_path": "filemanager/smartrm_filemanager/guga7/",
//           "folder_size": null,
//           "total_files": null,
//           "folder_path_querystring": "filemanager/smartrm_filemanager/guga7/"
//       }
//   ],
//   "count": 7,
//   "total_bytes": 1806
// }
