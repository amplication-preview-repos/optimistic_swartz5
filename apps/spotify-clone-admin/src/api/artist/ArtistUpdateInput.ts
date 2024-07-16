import { AlbumUpdateManyWithoutArtistsInput } from "./AlbumUpdateManyWithoutArtistsInput";

export type ArtistUpdateInput = {
  genre?: string | null;
  category?: string | null;
  name?: string | null;
  albums?: AlbumUpdateManyWithoutArtistsInput;
};
