import { HttpException, Injectable } from "@nestjs/common";
import { UserRegistrationDto } from "./dtos/user-registration.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "@app/entities/user.entity";
import { DataSource, Repository } from "typeorm";
import { UserDetailEntity } from "@app/entities/user-detail.entity";

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    @InjectRepository(UserDetailEntity)
    private readonly userDetailEntity: Repository<UserDetailEntity>,
    private dataSource: DataSource
  ) {
  }

  async registerUser(payload: UserRegistrationDto) {
    return await this.dataSource.transaction(async (entityManager) => {

      const user = entityManager.create(UserEntity, payload.user);
      const savedUser = await entityManager.save(UserEntity, user);

      console.log(savedUser);
      throw new HttpException("Example Error Message", 500);

      const userDetail = entityManager.create(UserDetailEntity, {
        ...payload.userDetail,
        user: savedUser
      });
      await entityManager.save(UserDetailEntity, userDetail);

      return savedUser;
    });
  }

}
