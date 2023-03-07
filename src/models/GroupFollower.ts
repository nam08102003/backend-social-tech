import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group_follower',
  timestamps: true
})
export class GroupFollower extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.INTEGER })
  public groupId!: number;

  @Column({ type: DataType.INTEGER })
  public UserId!: number;

  @Column({ type: DataType.INTEGER }) //0: Thích, 1: Không thích, 2: Theo dõi
  public type!: number;
}
