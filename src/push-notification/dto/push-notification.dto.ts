import { IsString, IsNotEmpty, IsObject, IsOptional } from 'class-validator';
import { Priority } from '../enum/priority.enum';

export class PushNotificationDto {
  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  public readonly token: string;

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  public readonly title: string;

  @IsOptional()
  public readonly priority: Priority;

  @IsString({ always: true })
  @IsNotEmpty({ always: true })
  public readonly body: string;

  @IsObject()
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/ban-types
  public readonly data?: object;

  @IsString()
  @IsOptional()
  public readonly to?: string;
}
