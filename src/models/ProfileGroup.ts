import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'profile_group',
  timestamps: true
})
export class ProfileGroup extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.INTEGER })
  public groupId!: number;

  @Column({ type: DataType.STRING }) //0: Công khai, 1: Thành viên, 2: Quản trị
  public type!: string;
}
