import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    this.envConfig = this.loadConfig();
  }

  private loadConfig(): { [key: string]: string } {
    const result = dotenv.config();
    if (result.error) {
      throw new Error('Failed to load .env file');
    }
    return result.parsed || {};
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}