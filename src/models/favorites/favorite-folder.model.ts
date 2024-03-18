import { FavoriteModel } from './favorite.model';

export class FavoriteFolderModel {  
  _id!: string;
  title!: string;
  path!: string;
  favorites!: FavoriteModel[];
  folders!: FavoriteFolderModel[];
  thumbnailUrl?: string;
  parentFolderId?: string;
}

export class NewFavoriteFolderInputDTO {
  title!: string;
  path!: string;
  files!: string[];
  folders!: string[];
  parentFolderId!: string;
}
