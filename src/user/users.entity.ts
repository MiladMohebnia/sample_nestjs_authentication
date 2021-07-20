import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column()
  role: string;

  @Column('timestamp')
  dt: Date;

  readableData() {
    return {
      id: this.id,
      username: this.username,
      role: JSON.parse(this.role),
    };
  }

  async checkPassword(password: string): Promise<boolean> {
    return (
      (await bcrypt.compare(password, this.password).catch(console.error)) ||
      false
    );
  }

  async setPassword(password: string) {
    this.password =
      (await bcrypt.hash(password, 10).catch(console.error)) || null;
    console.log(this.password);
  }

  async setRole(roleList: string[]) {
    this.role = JSON.stringify(roleList);
  }
}
