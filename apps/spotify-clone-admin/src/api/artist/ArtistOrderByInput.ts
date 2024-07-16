import { SortOrder } from "../../util/SortOrder";

export type ArtistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  genre?: SortOrder;
  category?: SortOrder;
  name?: SortOrder;
};
