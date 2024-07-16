/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { ArtistService } from "../artist.service";
import { ArtistCreateInput } from "./ArtistCreateInput";
import { ArtistWhereInput } from "./ArtistWhereInput";
import { ArtistWhereUniqueInput } from "./ArtistWhereUniqueInput";
import { ArtistFindManyArgs } from "./ArtistFindManyArgs";
import { ArtistUpdateInput } from "./ArtistUpdateInput";
import { Artist } from "./Artist";
import { AlbumFindManyArgs } from "../../album/base/AlbumFindManyArgs";
import { Album } from "../../album/base/Album";
import { AlbumWhereUniqueInput } from "../../album/base/AlbumWhereUniqueInput";

export class ArtistGrpcControllerBase {
  constructor(protected readonly service: ArtistService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Artist })
  @GrpcMethod("ArtistService", "createArtist")
  async createArtist(@common.Body() data: ArtistCreateInput): Promise<Artist> {
    return await this.service.createArtist({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        genre: true,
        category: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Artist] })
  @ApiNestedQuery(ArtistFindManyArgs)
  @GrpcMethod("ArtistService", "artists")
  async artists(@common.Req() request: Request): Promise<Artist[]> {
    const args = plainToClass(ArtistFindManyArgs, request.query);
    return this.service.artists({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        genre: true,
        category: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ArtistService", "artist")
  async artist(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    const result = await this.service.artist({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        genre: true,
        category: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ArtistService", "updateArtist")
  async updateArtist(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() data: ArtistUpdateInput
  ): Promise<Artist | null> {
    try {
      return await this.service.updateArtist({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          genre: true,
          category: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Artist })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ArtistService", "deleteArtist")
  async deleteArtist(
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Artist | null> {
    try {
      return await this.service.deleteArtist({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          genre: true,
          category: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/albums")
  @ApiNestedQuery(AlbumFindManyArgs)
  @GrpcMethod("ArtistService", "findManyAlbums")
  async findManyAlbums(
    @common.Req() request: Request,
    @common.Param() params: ArtistWhereUniqueInput
  ): Promise<Album[]> {
    const query = plainToClass(AlbumFindManyArgs, request.query);
    const results = await this.service.findAlbums(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        releaseDate: true,
        genre: true,

        artist: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/albums")
  @GrpcMethod("ArtistService", "connectAlbums")
  async connectAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        connect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/albums")
  @GrpcMethod("ArtistService", "updateAlbums")
  async updateAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        set: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/albums")
  @GrpcMethod("ArtistService", "disconnectAlbums")
  async disconnectAlbums(
    @common.Param() params: ArtistWhereUniqueInput,
    @common.Body() body: AlbumWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      albums: {
        disconnect: body,
      },
    };
    await this.service.updateArtist({
      where: params,
      data,
      select: { id: true },
    });
  }
}
