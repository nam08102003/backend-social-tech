import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_message',
  timestamps: true
})
export class UserMessage extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING })
  public userId!: string;

  @Column({ type: DataType.STRING })
  public friendId!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public message!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public notes!: string;
}
