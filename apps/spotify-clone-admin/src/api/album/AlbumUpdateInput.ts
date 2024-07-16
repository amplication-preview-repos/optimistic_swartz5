import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { SongUpdateManyWithoutAlbumsInput } from "./SongUpdateManyWithoutAlbumsInput";

export type AlbumUpdateInput = {
  title?: string | null;
  releaseDate?: Date | null;
  genre?: string | null;
  artist?: ArtistWhereUniqueInput | null;
  songs?: SongUpdateManyWithoutAlbumsInput;
};
