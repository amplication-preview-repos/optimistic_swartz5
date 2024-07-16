import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";

export type SongWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  duration?: IntNullableFilter;
  album?: AlbumWhereUniqueInput;
};
