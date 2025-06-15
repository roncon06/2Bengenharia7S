import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column({ type: 'date' })
  dataPublicacao: Date;

  @Column()
  genero: string;
}