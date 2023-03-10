import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_friend',
  timestamps: true
})
export class UserFriend extends Model {
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

  @Column({ type: DataType.STRING })
  public type!: string;

  @Column({ type: DataType.STRING })
  public status!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public notes!: string;
}
