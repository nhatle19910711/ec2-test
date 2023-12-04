import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  firstName: string;

  @ApiProperty({ type: String })
  lastName: string;

  @ApiProperty({ type: Boolean })
  isActive: boolean;
}
