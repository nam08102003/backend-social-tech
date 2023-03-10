import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_post',
  timestamps: true
})
export class UserPost extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING })
  public userId!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  public content!: string;

  @Column({ type: DataType.STRING }) //Công khai, Bạn bè, Chỉ mình tôi
  public type!: string;

  @Column({ type: DataType.DATE })
  public timePost!: Date;
}
