import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["playlist", "song", "album", "artist", "user"],
    protoPath: [
      "src/playlist/playlist.proto",
      "src/song/song.proto",
      "src/album/album.proto",
      "src/artist/artist.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
