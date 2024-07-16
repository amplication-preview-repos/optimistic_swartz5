import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { SongCreateNestedManyWithoutAlbumsInput } from "./SongCreateNestedManyWithoutAlbumsInput";

export type AlbumCreateInput = {
  title?: string | null;
  releaseDate?: Date | null;
  genre?: string | null;
  artist?: ArtistWhereUniqueInput | null;
  songs?: SongCreateNestedManyWithoutAlbumsInput;
};
