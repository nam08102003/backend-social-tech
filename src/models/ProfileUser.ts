import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'profile_user',
  timestamps: true
})
export class ProfileUser extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING })
  public UserId!: string;

  @Column({ type: DataType.STRING })
  public country!: string;

  @Column({ type: DataType.STRING })
  public address!: string;

  @Column({ type: DataType.STRING })
  public comeFrom!: string;

  @Column({ type: DataType.STRING })
  public language!: string;

  @Column({ type: DataType.STRING })
  public relationship!: string;

  @Column({ type: DataType.STRING })
  public spellName!: string;

  @Column({ type: DataType.STRING })
  public nickName!: string;

  @Column({ type: DataType.STRING })
  public favoriteSpeak!: string;

  @Column({ type: DataType.STRING }) //0: Công khai, 1: Bạn bè, 2: Chỉ mình tôi
  public type!: string;
}
