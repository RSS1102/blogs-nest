import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Blogs } from 'src/entity/blogs.entity';
import { BlogsService } from './blogs.service';

@Controller('/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}
  // 获取导航栏tree
  @Get('getBlogsTree')
  getList(): Promise<BlogsTree[]> {
    return this.blogsService.getList();
  }
  // 获取contenta
  @Post('getBlogsContent')
  addBlogs(@Query() query: { title: string }): Promise<Blogs | string> {
    console.log(query);
    return this.blogsService.getBlogsContent(query);
  }
}
