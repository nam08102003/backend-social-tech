import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_event',
  timestamps: true
})
export class UserEvent extends Model {
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
  public nameEvent!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  @Column({ type: DataType.DATE })
  public startTime!: Date;

  @Column({ type: DataType.DATE })
  public endTime!: Date;

  @Column({ type: DataType.STRING })
  public notes!: string;

  @Column({ type: DataType.STRING })
  public image!: string;
}
