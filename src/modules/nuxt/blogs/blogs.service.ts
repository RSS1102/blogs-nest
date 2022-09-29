import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blogs } from 'src/entity/blogs.entity';
import { Repository } from 'typeorm';
@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blogs)
    private BlogsRepository: Repository<Blogs>,
  ) {}

  async getList() {
    const formatter = (rootlist: Blogs[], id: number, list: any[]): any => {
      for (const item of rootlist) {
        if (item.parent === id && item.isShow === true) {
          list.push(item);
          delete item.parent;
        }
      }
      for (const i of list) {
        i.children = [];
        formatter(rootlist, i.id, i.children);
        if (i.children.length === 0) {
          delete i.children;
          delete i.parent;
        }
      }
      return list;
    };

    const listnav = await this.BlogsRepository.find({
      select: ['id', 'title', 'parent', 'isShow'],
    });
    const nav = formatter(listnav, null, []) as BlogsTree;
    return nav;
  }

  async getBlogsContent(title: string) {
    const getTitle = await this.BlogsRepository.findOneBy({
      title: title,
    });
    return getTitle;
  }
}
