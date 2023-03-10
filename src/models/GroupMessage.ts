import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'group_message',
  timestamps: true
})
export class GroupMessage extends Model {
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

  @Column({ type: DataType.STRING })
  public message!: string;
}
