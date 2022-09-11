import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from '../blogs/blogs.module';
import { CommunicationModule } from '../communication/communication.module';
import { SqlModule } from 'src/entity/sql';
@Module({
  imports: [SqlModule, BlogsModule, CommunicationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
