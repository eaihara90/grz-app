
export function saveFavorite(_favorite: any, path: string): Promise<any> {
  tempFavoriteFolders.forEach(folder => {
    if (folder.path === path) {
      console.log('added');
      folder.favorites.push(_favorite)
    }
  });
  return new Promise((res) => {
    res([]);
  });
}

const tempFavoriteFolders = [
  {
    _id: '1',
    title: 'Root',
    favorites: [
      {
        description: 'Description 1',
        thumbnailUrl: '',
        title: 'Favorite 1',
        url: 'https://www.google.com',
      },
      {
        description: 'Description 2',
        thumbnailUrl: '',
        title: 'Favorite 2',
        url: 'https://www.google.com',
      }
    ],
    folders: [
      {
        _id: '1',
        title: 'Folder 1',
        path: 'root/folder_1',
        favorites: [],
        folders: []
      },
      {
        _id: '2',
        title: 'Folder 2',
        path: 'root/folder_2',
        favorites: [],
        folders: []
      }
    ],
    path: 'root'
  },
  {
    _id: '1',
    title: 'Folder 1',
    favorites: [
      {
        description: 'Description 1',
        thumbnailUrl: '',
        title: 'Folder 1 - Favorite 1',
        url: 'https://www.google.com',
      },
      {
        description: 'Description 2',
        thumbnailUrl: '',
        title: 'Folder 1 - Favorite 2',
        url: 'https://www.google.com',
      }
    ],
    folders: [
      {
        _id: '1',
        title: 'Sub Folder 1-1',
        favorites: [],
        folders: [],
        path: 'root/folder_1/sub_folder_1-1'
      },
      {
        _id: '2',
        title: 'Sub Folder 1-2',
        favorites: [],
        folders: [],
        path: 'root/folder_1/sub_folder_1-2'
      }
    ],
    path: 'root/folder_1'
  },
  {
    _id: '2',
    title: 'Folder 2',
    favorites: [
      {
        description: 'Description 1',
        thumbnailUrl: '',
        title: 'Folder 2 - Favorite 1',
        url: 'https://www.google.com',
      },
      {
        description: 'Description 2',
        thumbnailUrl: '',
        title: 'Folder 2 - Favorite 2',
        url: 'https://www.google.com',
      }
    ],
    folders: [
      {
        _id: '1',
        title: 'Sub Folder 2-1',
        favorites: [],
        folders: [],
        path: 'root/folder_2/sub_folder_2-1'
      },
      {
        _id: '2',
        title: 'Sub Folder 2-2',
        favorites: [],
        folders: [],
        path: 'root/folder_2/sub_folder_2-2'
      }
    ],
    path: 'root/folder_2'
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
