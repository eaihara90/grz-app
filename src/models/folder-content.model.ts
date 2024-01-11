export class FolderContentModel {
  _id!: string;
  title!: string;
  type!: 'file' | 'folder';
  path!: string;
  parent?: string;
  content?: FolderContentModel[];
  description?: string;
  url?: string;
  isRoot?: boolean;
}