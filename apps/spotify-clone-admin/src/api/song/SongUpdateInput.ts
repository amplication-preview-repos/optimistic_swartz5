import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";

export type SongUpdateInput = {
  title?: string | null;
  releaseDate?: Date | null;
  duration?: number | null;
  album?: AlbumWhereUniqueInput | null;
};
