import { AlbumCreateNestedManyWithoutArtistsInput } from "./AlbumCreateNestedManyWithoutArtistsInput";

export type ArtistCreateInput = {
  genre?: string | null;
  category?: string | null;
  name?: string | null;
  albums?: AlbumCreateNestedManyWithoutArtistsInput;
};
