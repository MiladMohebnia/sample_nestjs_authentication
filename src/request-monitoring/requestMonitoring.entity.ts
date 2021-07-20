import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'request' })
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('timestamp')
  dt: Date;
}
