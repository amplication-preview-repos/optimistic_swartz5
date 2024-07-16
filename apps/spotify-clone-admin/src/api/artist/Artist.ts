import { Album } from "../album/Album";

export type Artist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  genre: string | null;
  category: string | null;
  name: string | null;
  albums?: Array<Album>;
};
