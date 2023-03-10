import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group_post',
  timestamps: true
})
export class GroupPost extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING })
  public groupId!: string;

  @Column({ type: DataType.STRING }) // Id người đăng
  public UserId!: string;

  @Column({ type: DataType.STRING })
  public title!: string;

  @Column({ type: DataType.STRING })
  public message!: string;

  @Column({ type: DataType.STRING }) //0: Công khai, 1: Thành viên, 2: Quản trị
  public type!: string;

  @Column({ type: DataType.DATE }) //0: Công khai, 1: Thành viên, 2: Quản trị
  public timePost!: Date;
}
