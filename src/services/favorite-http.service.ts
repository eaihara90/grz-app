import { NewFavoriteFolderInputDTO } from "src/models/favorites/favorite-folder.model";
import { NewFileDTO } from "src/models/favorites/favorite.model";

class FavoriteHttpService {
  private readonly protocol: string = 'http';
  private readonly host: string = 'localhost';
  private readonly port: string = '3005';
  private readonly baseApi: string = 'api';
  private readonly foldersPath: string = 'folders';
  private readonly filesPath: string = 'files';
  private headers = { "Content-Type": "application/json" };


  public getFavoriteFolderContent(_id: string): Promise<any> {
    const url = `${this.protocol}://${this.host}:${this.port}/${this.baseApi}/${this.foldersPath}/${_id}`;
    return fetch(url);
  }

  public saveFavoriteFolder(_newFolder: NewFavoriteFolderInputDTO): Promise<any> {
    const url = `${this.protocol}://${this.host}:${this.port}/${this.baseApi}/${this.foldersPath}`;
    return fetch(url, { method: 'POST', body: JSON.stringify(_newFolder), headers: this.headers });
  }

  public removeFolder(_id: string): Promise<any> {
    const url = `${this.protocol}://${this.host}:${this.port}/${this.baseApi}/${this.foldersPath}/${_id}`;
    return fetch(url, { method: 'DELETE' });
  }

  public saveFavorite(_newFile: NewFileDTO): Promise<any> {
    const url = `${this.protocol}://${this.host}:${this.port}/${this.baseApi}/${this.filesPath}`;
    return fetch(url, { method: 'POST', body: JSON.stringify(_newFile), headers: this.headers });
  }
}

export const favoriteHttpService = new FavoriteHttpService();