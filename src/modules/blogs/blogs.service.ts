import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {
  getList(): string {
    return 'blogs';
  }
}
