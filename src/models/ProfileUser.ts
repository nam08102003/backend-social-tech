import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'profile_user',
  timestamps: true
})
export class ProfileUser extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.INTEGER })
  public UserId!: number;

  @Column({ type: DataType.INTEGER }) //0: Công khai, 1: Bạn bè, 2: Chỉ mình tôi
  public type!: number;
}
