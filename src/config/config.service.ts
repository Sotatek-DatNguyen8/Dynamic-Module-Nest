import { Inject, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { CONFIG_OPTIONS } from 'src/config/constants';
import { ConfigOptions, EnvConfig } from 'src/config/interface';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) options: ConfigOptions) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(__dirname, '../../', options.folder, filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
