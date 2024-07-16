import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SongService } from "./song.service";
import { SongGrpcControllerBase } from "./base/song.grpc.controller.base";

@swagger.ApiTags("songs")
@common.Controller("songs")
export class SongGrpcController extends SongGrpcControllerBase {
  constructor(protected readonly service: SongService) {
    super(service);
  }
}
