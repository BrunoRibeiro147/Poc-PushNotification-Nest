import { Module } from '@nestjs/common';
import { PushNotificationController } from './push-notification.controller';
import { PushNotificationSendService } from './push-notification.service';

@Module({
  controllers: [PushNotificationController],
  providers: [PushNotificationSendService],
})
export class PushNotificationModule {}
