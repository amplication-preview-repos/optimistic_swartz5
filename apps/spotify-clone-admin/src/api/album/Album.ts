import { Artist } from "../artist/Artist";
import { Song } from "../song/Song";

export type Album = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  releaseDate: Date | null;
  genre: string | null;
  artist?: Artist | null;
  songs?: Array<Song>;
};
