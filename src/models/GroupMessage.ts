import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group_message',
  timestamps: true
})
export class GroupMessage extends Model {
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

  @Column({ type: DataType.STRING })
  public message!: string;
}
