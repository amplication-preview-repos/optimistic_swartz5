import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ArtistWhereUniqueInput } from "../artist/ArtistWhereUniqueInput";
import { SongListRelationFilter } from "../song/SongListRelationFilter";

export type AlbumWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  genre?: StringNullableFilter;
  artist?: ArtistWhereUniqueInput;
  songs?: SongListRelationFilter;
};
