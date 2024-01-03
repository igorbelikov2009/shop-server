import { Column, Model, Table } from 'sequelize-typescript';

// Создаём таблицу с пользователями
@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string;

  @Column
  email: string;
}
