import { Module } from '@nestjs/common';
import { TraderModule } from './trader/trader.module';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports: [TraderModule, WebsocketModule],
})
export class AppModule {}