export class FolderContentModel {
  _id!: string;
  title!: string;
  type!: 'file' | 'folder';
  path!: string;
  parent?: string;
  content?: FolderContentModel[];
  description?: string;
  url?: string;
  thumbImgUrl?: string;
  isRoot?: boolean;
}
export class Folder {
  _id!: string;
  title!: string;
  path!: string;
  files?: [];
  folders?: [];

  thumbUrl?: string;
}