import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_contact',
  timestamps: true
})
export class UserContact extends Model {
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
  public contact!: string;

  @Column({ type: DataType.STRING })
  public value!: string;

  @Column({ type: DataType.STRING })
  public type!: string;

  @Column({ type: DataType.STRING })
  public image!: string;
}
