import { Controller, Post, Body } from '@nestjs/common';
import { PushNotificationDto } from './dto/push-notification.dto';
import { PushNotificationSendService } from './push-notification.service';

@Controller('push-notification')
export class PushNotificationController {
  constructor(
    private readonly pushNotificationService: PushNotificationSendService,
  ) {}

  @Post()
  async send(@Body() pushNotificationDto: PushNotificationDto) {
    console.log(`method called ${this.send.name}()`);
    return await this.pushNotificationService.send(pushNotificationDto);
  }
}
