import { IsNotEmpty } from 'class-validator';

export class CreateReservationDto {
  startDate: Date;
  @IsNotEmpty()
  endDate: Date;
  location: string;
  numberOfGuests: number;
}
