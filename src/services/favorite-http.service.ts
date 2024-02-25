
class FavoriteHttpService {
  private readonly protocol: string = 'http';
  private readonly host: string = 'localhost';
  private readonly port: string = '3005';
  private readonly baseApi: string = 'api';
  private readonly path: string = 'folders';


  public getFavoriteFolderContent(_id: string): Promise<any> {
    const url = `${this.protocol}://${this.host}:${this.port}/${this.baseApi}/${this.path}/${_id}`;
    return fetch(url);
  }

  public saveFavoriteFolder(_newFolder ): Promise<any> {
    const url = `${this.protocol}://${this.host}:${this.port}/${this.baseApi}/${this.path}`;
    return fetch(url, { method: 'POST', body: JSON.stringify()});
  }
}

export const favoriteHttpService = new FavoriteHttpService();