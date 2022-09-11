import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogs } from 'src/entity/blogs.entity';
import { Repository } from 'typeorm';
import { response } from 'src/type';
@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blogs)
    private BlogsRepository: Repository<Blogs>,
  ) {}

  getList(): Promise<Blogs[]> {
    return this.BlogsRepository.find();
  }

  addBlogs(Blogs: Blogs): response {
    this.BlogsRepository.create(Blogs);
    return {
      code: 200,
      msg: '添加成功',
    };
  }
}
