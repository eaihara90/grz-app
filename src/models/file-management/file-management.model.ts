export class FileModel {
  description?: string;
  thumbnailUrl?: string;
  title!: string;
  url?: string;
}

export class FolderModel {  
  _id!: string;
  title!: string;
  path!: string;
  files!: FileModel[];
  folders!: FolderModel[];
  thumbnailUrl?: string;
}