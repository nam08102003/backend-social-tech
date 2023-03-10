import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group_members',
  timestamps: true
})
export class GroupMember extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING })
  public groupId!: string;

  @Column({ type: DataType.STRING })
  public UserId!: string;

  @Column({ type: DataType.INTEGER }) //0: Admin, 1: Thành viên, 2: Phó nhóm, 3: Người duyệt
  public roleId!: number;

  @Column({ type: DataType.STRING })
  public status!: string;

  @Column({ type: DataType.TEXT })
  public notes!: string;
}
