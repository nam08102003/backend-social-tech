import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'user_favorite',
  timestamps: true
})
export class UserFavorite extends Model {
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
  public favorite!: string;

  @Column({ type: DataType.STRING })
  public image!: string;
}
