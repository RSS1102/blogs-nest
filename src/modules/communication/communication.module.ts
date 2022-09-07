import { Module } from '@nestjs/common';
import { BlogsController } from './communication.controller';
import { CommunicationService } from './communication.service';

@Module({
  imports: [],
  controllers: [BlogsController],
  providers: [CommunicationService],
})
export class CommunicationModule {}
