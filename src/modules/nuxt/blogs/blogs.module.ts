import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogs } from 'src/entity/blogs.entity';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Blogs])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
