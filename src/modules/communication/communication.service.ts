import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunicationService {
  getList(): string {
    return 'blogs';
  }
}
