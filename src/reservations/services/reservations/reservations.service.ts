import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { Reservation } from 'src/reservations/domain/types';
import { CreateReservationDto } from 'src/reservations/dtos/CreateReservationDto';

const reservations: Reservation[] = [];

@Injectable()
export class ReservationsService {
  async getAllReservations() {
    return reservations;
  }

  async getReservationById(id: number) {
    return reservations[id];
  }

  async createReservation(reservationParam: CreateReservationDto) {
    reservations.push(reservationParam);
    return reservationParam;
  }
}
