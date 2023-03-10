import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'groups',
  timestamps: true
})
export class Group extends Model {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({ type: DataType.INTEGER }) //id người tạo
  public createdBy!: number;

  @Column({ type: DataType.INTEGER }) //id người sửa cuối cùng
  public updatedBy!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  public title!: string;

  @Column({ type: DataType.STRING, allowNull: true }) //Dùng cho tiêu đề trình duyệt và mục đích SEO
  public metaTitle!: string;

  @Column({ type: DataType.STRING, allowNull: false }) //Dùng cho việc tạo 1 url duy nhất
  public slug!: string;

  @Column({ type: DataType.TEXT }) //Mô tả trang group
  public description!: string;

  @Column({ type: DataType.STRING }) // Mới, Đang hoạt động, Đã khóa
  public status!: string;

  @Column({ type: DataType.TEXT })
  public content!: string;
}
