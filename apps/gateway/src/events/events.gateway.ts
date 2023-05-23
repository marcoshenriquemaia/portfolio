import { SubscribeMessage } from '@nestjs/websockets';

export class EventsGateway {
  @SubscribeMessage('events')
  getHello(): string {
    return 'Hello World!';
  }
}
