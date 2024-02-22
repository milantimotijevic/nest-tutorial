import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ReservationsController } from './controllers/reservations/reservations.controller';
import { ReservationsService } from './services/reservations/reservations.service';
import { ReservationAccessMiddleware } from './middleware/reservation-access/reservation-access.middleware';
import { AuthMiddleware } from 'src/global-middleware/auth/auth.middleware';

@Module({
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ReservationsController);
    consumer.apply(ReservationAccessMiddleware).forRoutes(ReservationsController);
  }
}
