import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserDetailEntity } from "./user-detail.entity";


@Entity()
export class UserEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToOne(() => UserDetailEntity, userDetail => userDetail.user)
  @JoinColumn()
  userDetail: UserDetailEntity;
}
