import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';
import { PushNotificationDto } from './dto/push-notification.dto';
import * as serviceAccount from '../../firebase_configuration.json';
import { ServiceAccount } from 'firebase-admin';

@Injectable()
export class PushNotificationSendService {
  constructor() {
    console.log('constructor called()');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
    console.log('constructor executed()');
  }

  async send(pushNotificationDto: PushNotificationDto) {
    const { token } = pushNotificationDto;
    console.log(`method called ${this.send.name}() `);
    const payload = makePayload(pushNotificationDto);

    Promise.all([await admin.messaging().sendToDevice(token, payload)]);
    console.log(`${this.send.name} executed with notification payload`);
  }
}

const makePayload = (pushNotificationDto: PushNotificationDto) => {
  const { title, body, data = null } = pushNotificationDto;

  if (!data) {
    return {
      notification: {
        title,
        body,
      },
    } as admin.messaging.MessagingPayload;
  }

  return {
    notification: {
      title,
      body,
    },
    data,
  } as admin.messaging.MessagingPayload;
};
