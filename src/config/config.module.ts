import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';
import { CONFIG_OPTIONS } from 'src/config/constants';

export interface ConfigModuleOptions {
  folder: string;
}

@Module({})
export class ConfigModule {
  static register(options: ConfigModuleOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        ConfigService,
      ],
      exports: [ConfigService],
    };
  }
}
