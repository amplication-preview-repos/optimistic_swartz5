import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArtistService } from "./artist.service";
import { ArtistGrpcControllerBase } from "./base/artist.grpc.controller.base";

@swagger.ApiTags("artists")
@common.Controller("artists")
export class ArtistGrpcController extends ArtistGrpcControllerBase {
  constructor(protected readonly service: ArtistService) {
    super(service);
  }
}
