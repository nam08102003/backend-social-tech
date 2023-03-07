import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group_post',
  timestamps: true
})
export class GroupPost extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.INTEGER })
  public groupId!: number;

  @Column({ type: DataType.INTEGER }) // Id người đăng
  public UserId!: number;

  @Column({ type: DataType.STRING })
  public title!: string;

  @Column({ type: DataType.STRING })
  public message!: string;

  @Column({ type: DataType.INTEGER }) //0: Công khai, 1: Thành viên, 2: Quản trị
  public type!: number;
}
