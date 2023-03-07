import { Table, Column, DataType, IsEmail, Model } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.STRING, allowNull: true })
  public firstName!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public lastName!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public fullName!: string;

  @Column({ type: DataType.STRING })
  public birthday!: string;

  @Column({ type: DataType.INTEGER }) //0: Nam, 1: Nữ, 2: Khác
  public gender!: number;

  @IsEmail
  @Column({ type: DataType.STRING, allowNull: false })
  public email!: string;

  @Column({ type: DataType.STRING })
  public phone!: string;

  @Column({ type: DataType.TEXT })
  public password!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  @Column({ type: DataType.TEXT })
  public intro!: string;

  @Column({ type: DataType.TEXT })
  public avatar!: string;

  @Column({ type: DataType.STRING })
  public lastLogin!: string;

  @Column({ type: DataType.INTEGER }) //0: Admin, 1: Người dùng
  public roleId!: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 }) //0: Chưa xác thực, 1: Đã xác thực
  public status!: number;
}
