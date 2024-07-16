import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlaylistService } from "./playlist.service";
import { PlaylistGrpcControllerBase } from "./base/playlist.grpc.controller.base";

@swagger.ApiTags("playlists")
@common.Controller("playlists")
export class PlaylistGrpcController extends PlaylistGrpcControllerBase {
  constructor(protected readonly service: PlaylistService) {
    super(service);
  }
}
