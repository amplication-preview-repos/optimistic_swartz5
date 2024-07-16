import { AlbumWhereUniqueInput } from "../album/AlbumWhereUniqueInput";

export type SongCreateInput = {
  title?: string | null;
  releaseDate?: Date | null;
  duration?: number | null;
  album?: AlbumWhereUniqueInput | null;
};
