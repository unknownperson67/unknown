import { Injectable } from '@nestjs/common';
import { TelegramContext } from 'bottender';
import { ResponseService } from './response.service';

@Injectable()
export class MessageService {
  constructor(private readonly responseService: ResponseService) {}

  // eslint-disable-next-line
  async handleMessage(context: TelegramContext): Promise<string> {
    return this.responseService.getDefaultResponse();
  }
}
