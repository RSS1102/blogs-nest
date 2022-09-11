import { Body, Controller, Get, Post } from '@nestjs/common';
import { Blogs } from 'src/entity/blogs.entity';
import { response } from 'src/type';
import { BlogsService } from './blogs.service';

@Controller('/blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Get('/getList')
  getList(): Promise<Blogs[]> {
    return this.blogsService.getList();
  }

  @Post('/addBlogs')
  addBlogs(@Body() Blogs: Blogs): response {
    return this.blogsService.addBlogs(Blogs);
  }
}
