import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AlbumListRelationFilter } from "../album/AlbumListRelationFilter";

export type ArtistWhereInput = {
  id?: StringFilter;
  genre?: StringNullableFilter;
  category?: StringNullableFilter;
  name?: StringNullableFilter;
  albums?: AlbumListRelationFilter;
};
