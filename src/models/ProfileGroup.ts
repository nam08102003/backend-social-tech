import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'profile_group',
  timestamps: true
})
export class ProfileGroup extends Model {
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
  public type!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  @Column({ type: DataType.TIME })
  public timeOpen!: Date;

  @Column({ type: DataType.TIME })
  public timeClose!: Date;

  @Column({ type: DataType.STRING })
  public field!: string;
}
