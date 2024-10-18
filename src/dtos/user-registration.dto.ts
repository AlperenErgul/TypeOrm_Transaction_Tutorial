import { IsDateString, IsEmail, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class UserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UserDetailDto {

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsDateString()
  birthDate: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

}

export class UserRegistrationDto {

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => UserDto)
  user: UserDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => UserDetailDto)
  userDetail: UserDetailDto;

}
