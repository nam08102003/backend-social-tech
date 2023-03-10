import { Table, Column, DataType, IsEmail, Model } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public firstName!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public lastName!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public fullName!: string;

  @Column({ type: DataType.DATEONLY })
  public birthday!: Date;

  @Column({ type: DataType.STRING })
  public gender!: string;

  @IsEmail
  @Column({ type: DataType.STRING, allowNull: false })
  public email!: string;

  @Column({ type: DataType.STRING })
  public phone!: string;

  @Column({ type: DataType.TEXT })
  public password!: string;

  @Column({ type: DataType.STRING })
  public intro!: string;

  @Column({ type: DataType.STRING })
  public avatar!: string;

  @Column({ type: DataType.STRING })
  public coverImage!: string;

  @Column({ type: DataType.DATE })
  public lastLogin!: Date;

  @Column({ type: DataType.INTEGER, defaultValue: 1 }) //0: Admin, 1: Người dùng
  public roleId!: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 }) //0: Chưa xác thực, 1: Đã xác thực
  public status!: number;
}
