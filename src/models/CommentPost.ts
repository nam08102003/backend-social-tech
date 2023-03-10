import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'comment_post',
  timestamps: true
})
export class CommentPost extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING })
  public postId!: string;

  @Column({ type: DataType.STRING })
  public userId!: string;

  @Column({ type: DataType.DATE })
  public time!: Date;

  @Column({ type: DataType.STRING })
  public message!: string;
}
