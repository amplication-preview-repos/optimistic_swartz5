import { JsonValue } from "type-fest";
import { Playlist } from "../playlist/Playlist";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  playlists?: Array<Playlist>;
};
