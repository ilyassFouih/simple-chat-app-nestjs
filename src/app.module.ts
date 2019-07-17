import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { UserService } from './user.service';

@Module({
  imports: [ChatModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
