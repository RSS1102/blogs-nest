import { Controller, Get } from '@nestjs/common';
import { CommunicationService } from './communication.service';

@Controller('/communication')
export class BlogsController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  getList(): string {
    return this.communicationService.getList();
  }
}
