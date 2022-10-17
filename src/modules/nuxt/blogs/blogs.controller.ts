import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { BlogsDto } from 'src/dto/blogs';
import { Blogs } from 'src/entity/blogs.entity';
import { response } from 'src/type';
import { BlogsService } from './blogs.service';

@Controller('/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}
  // 获取导航栏tree
  @Get('getBlogsTree')
  getBlogsTree(): Promise<response<BlogsTree[]>> {
    return this.blogsService.getBlogsTree();
  }
  // 获取contenta
  @Header('Access-Control-Allow-Origin', '*')
  @Get('getBlogsContent')
  getBlogsContent(@Query() query: BlogsDto): Promise<response<Blogs> | null> {
    console.log(query);
    return this.blogsService.getBlogsContent(query);
  }
}
