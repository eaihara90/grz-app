export class FavoriteModel {
  constructor(
    public _id: string,
    public title: string,
    public url: string,
    public description: string,
    public thumbnailUrl: string,
  ) { }
}

export class NewFileDTO {
  constructor(
    public title: string,
    public url: string,
    public folderId: string,
    public thumbnailUrl?: string,
    public description?: string
  ) { } 
}