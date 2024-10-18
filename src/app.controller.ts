import { Body, Controller, Post } from "@nestjs/common";
import { UserRegistrationDto } from "./dtos/user-registration.dto";
import { AppService } from "@app/app.service";

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {
  }

  @Post("user/register")
  async userRegister(@Body() payload: UserRegistrationDto) {
    return await this.appService.registerUser(payload);
  }
}
