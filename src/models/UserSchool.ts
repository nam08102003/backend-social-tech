import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_school',
  timestamps: true
})
export class UserSchool extends Model {
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
  public nameSchool!: string;

  @Column({ type: DataType.STRING })
  public type!: string;

  @Column({ type: DataType.DATEONLY })
  public startDate!: Date;

  @Column({ type: DataType.DATEONLY })
  public endDate!: Date;

  @Column({ type: DataType.STRING })
  public image!: string;
}
