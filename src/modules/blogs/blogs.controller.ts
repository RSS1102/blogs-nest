import { Controller, Get } from '@nestjs/common';
import { BlogsService } from './blogs.service';

@Controller('/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get()
  getList(): string {
    return this.blogsService.getList();
  }
}
