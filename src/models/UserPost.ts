import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_post',
  timestamps: true
})
export class UserPost extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.INTEGER })
  public userId!: number;

  @Column({ type: DataType.STRING, allowNull: true })
  public content!: string;

  @Column({ type: DataType.INTEGER }) //0: Công khai, 1: Bạn bè, 2: Chỉ mình tôi
  public type!: number;
}
