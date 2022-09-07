import { Module } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

@Module({
  imports: [],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
