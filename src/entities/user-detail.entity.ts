import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";


@Entity()
export class UserDetailEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gender: string;

  @Column({
    type: "date"
  })
  birthDate: Date;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;

  @OneToOne(() => UserEntity, user => user.userDetail)
  user: UserEntity;

}
