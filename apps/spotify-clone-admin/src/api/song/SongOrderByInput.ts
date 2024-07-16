import { SortOrder } from "../../util/SortOrder";

export type SongOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  releaseDate?: SortOrder;
  duration?: SortOrder;
  albumId?: SortOrder;
};
