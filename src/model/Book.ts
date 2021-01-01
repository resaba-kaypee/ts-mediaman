import "reflect-metadata";
import { Expose, Type } from "class-transformer";
import { Genre, Media } from "./Media";

export class Book extends Media {
  private _author: string;
  private _numberOfPages: number;

  constructor(
    name: string,
    description: string,
    pictureLocation: string,
    genre: Genre,
    author: string,
    numberOfPages: number,
    identifier?: string
  ) {
    super(name, description, pictureLocation, genre, identifier);
    this._numberOfPages = numberOfPages;
    this._author = author;
  }
  // :> Getter Setter Start
  @Expose()
  get author(): string {
    return this._author;
  }

  set author(author: string) {
    this._author = author;
  }

  @Expose()
  @Type(() => Number)
  get numberOfPages(): number {
    return this._numberOfPages;
  }

  set numberOfPages(numberOfPages: number) {
    this._numberOfPages = numberOfPages;
  }
  // :> Getter Setter End
}
