import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, ParseBoolPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateReservationDto } from 'src/reservations/dtos/CreateReservationDto';

@Controller('reservations')
export class ReservationsController {
    @Get()
    async getAllReservations(@Query('asc', new ParseBoolPipe({optional: true})) asc = true) {
        return {
            sortOrder: asc ? 'ascending' : 'descending',
            reservations: []
        };
    }

    @Get(':id')
    async getReservationById(@Param('id', ParseIntPipe) id: number) {
        return {
            id: id,
            location: 'placeholder',
        }
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createReservation(@Body() createReservationDto: CreateReservationDto) {
        return createReservationDto;
    }
}
