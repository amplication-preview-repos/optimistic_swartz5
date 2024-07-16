import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaylistUpdateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
