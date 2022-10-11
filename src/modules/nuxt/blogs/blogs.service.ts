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

  async getBlogsTree() {
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
    return {
      code: 0,
      data: tree,
      msg: '未查询到数据',
    };
  }

  async getBlogsContent(query: { title: string }) {
    const getContent = await this.BlogsRepository.findOneBy({
      ...query,
    });
    if (getContent !== null) {
      return {
        code: 0,
        data: getContent,
      };
    } else {
      return {
        code: -1,
        data: getContent,
        msg: '未查询到数据',
      };
    }
  }
}
