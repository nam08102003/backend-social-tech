import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_follower',
  timestamps: true
})
export class UserFollower extends Model {
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
  public followerId!: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  public message!: string;

  @Column({ type: DataType.STRING, allowNull: true }) // Follow, Not Follow
  public type!: string;
}
