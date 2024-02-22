import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { HealthModule } from './health/health.module';
import { AuthMiddleware } from './global-middleware/auth/auth.middleware';
import { ReservationsController } from './reservations/controllers/reservations/reservations.controller';

@Module({
  imports: [ReservationsModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(ReservationsController);
    }
}
