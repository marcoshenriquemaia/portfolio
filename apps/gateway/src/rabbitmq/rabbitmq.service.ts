import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy,
  ) {
    this.client.connect();
  }

  async sendEvent(
    event: string,
    data: {
      email: string;
      first_name: string;
      last_name: string;
    },
  ) {
    this.client.emit(event, data);
  }
}
