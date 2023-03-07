import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group_members',
  timestamps: true
})
export class GroupMember extends Model {
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

  @Column({ type: DataType.INTEGER }) //0: Admin, 1: Thành viên, 2: Phó nhóm, 3: Người duyệt
  public roleId!: number;

  @Column({ type: DataType.INTEGER }) //0: Mới, 1: Bị từ chối, 2: Đang hoạt động, 3: Đang chờ duyệt, 4: Bị chặn,
  public status!: number;

  @Column({ type: DataType.TEXT })
  public notes!: string;
}
