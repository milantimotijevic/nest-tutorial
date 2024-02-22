import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ReservationsController } from './controllers/reservations/reservations.controller';
import { ReservationsService } from './services/reservations/reservations.service';
import { ReservationAccessMiddleware } from './middleware/reservation-access/reservation-access.middleware';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReservationAccessMiddleware).forRoutes('reservations');
  }
}
