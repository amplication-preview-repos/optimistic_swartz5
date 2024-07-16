import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PlaylistCreateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
