import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_follower',
  timestamps: true
})
export class UserFollower extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING })
  public userId!: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  public followerId!: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  public message!: string;

  @Column({ type: DataType.STRING, allowNull: true }) // Follow, Not Follow
  public type!: string;
}
