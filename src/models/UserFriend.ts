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

  @Column({ type: DataType.INTEGER, allowNull: true })
  public friendId!: number;

  @Column({ type: DataType.SMALLINT, allowNull: true, defaultValue: 0 }) // 0: Normal, 1: Friendly, 2: Lover
  public type!: number;

  @Column({ type: DataType.SMALLINT, allowNull: true, defaultValue: 0 }) // 0: New, 1: Rejected, 2: Active
  public status!: number;

  @Column({ type: DataType.STRING, allowNull: true })
  public notes!: string;
}
