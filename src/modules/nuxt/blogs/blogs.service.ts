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
          delete item.isShow;
        }
      }
      for (const i of list) {
        i.children = [];
        formatter(rootlist, i.id, i.children);
        if (i.children.length === 0) {
          // i.children = null;
          delete i.parent;
          delete i.isShow;
        }
      }
      return list;
    };

    const listnav = await this.BlogsRepository.find({
      select: ['id', 'title', 'parent', 'isShow'],
    });
    const nav = formatter(listnav, null, []) as BlogsTree[];
    // 将不含children的导航栏去掉
    const tree = [];
    for (const i of nav) {
      if (i?.children.length > 0) {
        tree.push(i);
      }
    }
    return tree;
  }

  async getBlogsContent(title: string) {
    const getTitle = await this.BlogsRepository.findOneBy({
      title: title,
    });
    return getTitle;
  }
}
