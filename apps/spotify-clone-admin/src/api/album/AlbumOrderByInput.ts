import { SortOrder } from "../../util/SortOrder";

export type AlbumOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  releaseDate?: SortOrder;
  genre?: SortOrder;
  artistId?: SortOrder;
};
