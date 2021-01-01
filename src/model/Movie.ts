import "reflect-metadata";
import { Expose } from "class-transformer";
import { Genre, Media } from "./Media";

class Movie extends Media {
  private _duration: string;
  private _director: string;
  constructor(
    name: string,
    description: string,
    pictureLocation: string,
    genre: Genre,
    duration: string,
    director: string,
    identifier?: string
  ) {
    super(name, description, pictureLocation, genre, identifier);
    this._duration = duration;
    this._director = director;
  }
  // :> Getter Setter Start
  @Expose()
  get director(): string {
    return this._director;
  }

  set director(director: string) {
    this._director = director;
  }

  @Expose()
  get duration(): string {
    return this._duration;
  }

  set duration(duration: string) {
    this._duration = duration;
  }
  // :> Getter Setter End
}
