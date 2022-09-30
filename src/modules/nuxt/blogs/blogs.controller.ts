import { Body, Controller, Get, Post } from '@nestjs/common';
import { Blogs } from 'src/entity/blogs.entity';
import { BlogsService } from './blogs.service';

@Controller('/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}
  // 获取导航栏tree
  @Get('/getBlogsTree')
  getList(): Promise<BlogsTree[]> {
    return this.blogsService.getList();
  }
  // 获取content
  @Post('/getBlogsContent')
  addBlogs(@Body() title: string): Promise<Blogs | null> {
    return this.blogsService.getBlogsContent(title);
  }
}
