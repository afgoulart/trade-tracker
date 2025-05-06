import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AssetDto } from './dto/asset.dto';
import { Asset } from './interfaces/asset.interface';

@Injectable()
export class TraderService {
  private readonly apiUrl = 'https://api.traderview.com'; // URL da API da Trader View

  async getAssets(): Promise<Asset[]> {
    const response = await axios.get(`${this.apiUrl}/assets`);
    return response.data;
  }

  async monitorAsset(assetDto: AssetDto): Promise<Asset> {
    const response = await axios.post(`${this.apiUrl}/monitor`, assetDto);
    return response.data;
  }

  async stopMonitoringAsset(assetId: string): Promise<void> {
    await axios.delete(`${this.apiUrl}/monitor/${assetId}`);
  }
}