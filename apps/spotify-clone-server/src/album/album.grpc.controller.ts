import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AlbumService } from "./album.service";
import { AlbumGrpcControllerBase } from "./base/album.grpc.controller.base";

@swagger.ApiTags("albums")
@common.Controller("albums")
export class AlbumGrpcController extends AlbumGrpcControllerBase {
  constructor(protected readonly service: AlbumService) {
    super(service);
  }
}
