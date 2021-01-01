export enum Genre {
  Horror = "Horror",
  Fantastic = "Fantastic",
  Thriller = "Thriller",
  Romance = "Romance",
  Fiction = "Fiction",
}
export abstract class Media {
  private _identifier: string;

  protected constructor(
    private _name: string,
    private _description: string,
    private _pictureLocation: string,
    private _genre: Genre,
    identifier?: string
  ) {
    if (identifier) {
      this._identifier = identifier;
    } else {
      // this is just for the example; for any real project, use
      // UUIDs instead: https://www.npmjs.com/package/uuid
      this._identifier = Math.random().toString(36).substr(2, 9);
    }
  }

  // :> Getter Setter Start
  get identifier(): string {
    return this._identifier;
  }
  set identifier(identifier: string) {
    this._identifier = identifier;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get description(): string {
    return this._description;
  }
  set description(description: string) {
    this._description = description;
  }
  get pictureLocation(): string {
    return this._pictureLocation;
  }
  set pictureLocation(pictureLocation: string) {
    this._pictureLocation = pictureLocation;
  }
  get genre(): Genre {
    return this._genre;
  }
  set genre(genre: Genre) {
    this._genre = genre;
  }
  // :> Getter Setter End
}

export class MediaCollection<T extends Media> {
  private _identifier: string;
  private _name: string = "";
  private _collection: ReadonlyArray<T> = [];
  private readonly _type: Function;

  constructor(type: Function, name?: string, identifier?: string) {
    this._type = type;
    if (name) {
      this._name = name;
    }
    if (identifier) {
      this._identifier = identifier;
    } else {
      // this is just for the example; for any real project, use
      // UUIDs instead: https://www.npmjs.com/package/uuid
      this._identifier = Math.random().toString(36).substr(2, 9);
    }
  }

  // :> Getter Setter Start
  get identifier(): string {
    return this._identifier;
  }
  set identifier(identifier: string) {
    this._identifier = identifier;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get collection(): ReadonlyArray<T> {
    return this._collection;
  }
  set collection(collection: ReadonlyArray<T>) {
    this._collection = collection;
  }
  // :> Getter Setter End

  addMedia(media: Readonly<T>): void {
    if (media) {
      this._collection = this._collection.concat(media);
    }
  }
  removeMedia(itemId: string) {
    if (itemId) {
      this._collection = this._collection.filter((item) => {
        return item.identifier !== itemId;
      });
    }
  }
}
