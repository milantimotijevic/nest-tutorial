import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ReservationAccessMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Reservation access granted :)')
    next();
  }
}
