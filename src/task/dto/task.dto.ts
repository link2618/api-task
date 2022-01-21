// npm i class-validator class-transformer
import { IsNotEmpty, IsString, IsBoolean, MinLength } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(5, {
    message: 'Debe tener minimo 5 carracteres',
    context: {
      errorCode: 1003,
      developerNote: 'The validated string must contain 5 or more characters.',
    }
  })
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
