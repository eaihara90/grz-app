export class FavoriteModel {
  constructor(
    public _id: string,
    public title: string,
    public url: string,
    public description: string,
    public thumbnailUrl: string,
  ) { }
}