import { Module } from '@nestjs/common';
import { ReservationsModule } from './reservations/reservations.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [ReservationsModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
