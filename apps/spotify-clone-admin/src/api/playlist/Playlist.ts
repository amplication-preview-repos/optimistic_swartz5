import { User } from "../user/User";

export type Playlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  user?: User | null;
};
