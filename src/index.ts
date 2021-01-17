import { HTMLMediaManView } from "./view/MediaManView";
import { bookService, movieService } from "./controller/MediaService";
import {
  MediaManControllerImpl,
  MediaManController,
} from "./controller/MediaManController";

const view: HTMLMediaManView = new HTMLMediaManView();

const mediaManController = new MediaManControllerImpl(
  view,
  bookService,
  movieService
);

interface CustomWindow extends Window {
  mediaManController?: MediaManController;
}

const customWindow: CustomWindow = window;
customWindow.mediaManController = mediaManController;

console.log("MediaMan ready!", customWindow.mediaManController);
