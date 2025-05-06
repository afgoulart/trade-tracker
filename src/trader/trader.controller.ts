import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TraderService } from './trader.service';
import { AssetDto } from './dto/asset.dto';

@Controller('trader')
export class TraderController {
  constructor(private readonly traderService: TraderService) {}

  @Get('assets')
  getAllAssets() {
    return this.traderService.getAllAssets();
  }

  @Post('assets')
  createAsset(@Body() assetDto: AssetDto) {
    return this.traderService.createAsset(assetDto);
  }

  @Get('assets/:id')
  getAssetById(@Param('id') id: string) {
    return this.traderService.getAssetById(id);
  }
}