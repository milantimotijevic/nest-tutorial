import { Module } from '@nestjs/common';
import { ReservationsController } from './controllers/reservations/reservations.controller';

@Module({
  controllers: [ReservationsController]
})
export class ReservationsModule {}
