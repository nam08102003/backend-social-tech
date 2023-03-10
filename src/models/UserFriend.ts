import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_friend',
  timestamps: true
})
export class UserFriend extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.INTEGER })
  public userId!: number;

  @Column({ type: DataType.INTEGER })
  public friendId!: number;

  @Column({ type: DataType.STRING, defaultValue: 0 })
  public type!: string;

  @Column({ type: DataType.STRING, defaultValue: 0 })
  public status!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public notes!: string;
}
