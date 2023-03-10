import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_work',
  timestamps: true
})
export class UserWork extends Model {
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
  public nameCompany!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  @Column({ type: DataType.STRING })
  public position!: string;

  @Column({ type: DataType.STRING })
  public notes!: string;

  @Column({ type: DataType.STRING })
  public image!: string;
}
