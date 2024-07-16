import { Album } from "../album/Album";

export type Song = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  releaseDate: Date | null;
  duration: number | null;
  album?: Album | null;
};
