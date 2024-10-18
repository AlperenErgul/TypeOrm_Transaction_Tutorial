import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: "postgres",
          host: configService.getOrThrow<string>("DATABASE_HOST"),
          port: configService.getOrThrow<number>("DATABASE_PORT"),
          username: configService.getOrThrow<string>("DATABASE_USERNAME"),
          password: configService.getOrThrow<string>("DATABASE_PASSWORD"),
          database: configService.getOrThrow<string>("DATABASE_NAME"),
          autoLoadEntities: true,
          entities: [__dirname + "/**/*.entity{.ts,.js}"],
          synchronize: true
        };
      }
    })
  ]
})
export class DatabaseModule {
}
