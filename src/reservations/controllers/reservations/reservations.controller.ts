import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { CreateReservationDto } from 'src/reservations/dtos/CreateReservationDto';
import { ReservationsService } from 'src/reservations/services/reservations/reservations.service';

@Controller('reservations')
export class ReservationsController {
  constructor(private reservationsService: ReservationsService) {}

  @Get()
  async getAllReservations(
    @Query('asc', new ParseBoolPipe({ optional: true })) asc = true,
  ) {
    const reservations = await this.reservationsService.getAllReservations();
    return {
      sortOrder: asc ? 'ascending' : 'descending',
      reservations,
    };
  }

  @Get(':id')
  async getReservationById(@Param('id', ParseIntPipe) id: number) {
    const reservation = await this.reservationsService.getReservationById(id);
    return reservation;
  }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createReservation(@Body() reservationParam: CreateReservationDto) {
    const reservation =
      await this.reservationsService.createReservation(reservationParam);
    return reservation;
  }
}
