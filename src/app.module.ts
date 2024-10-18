import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "@common/database/database.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "@app/entities/user.entity";
import { UserDetailEntity } from "@app/entities/user-detail.entity";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([UserEntity, UserDetailEntity])
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
