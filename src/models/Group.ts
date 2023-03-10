import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table({
  tableName: 'groups',
  timestamps: true
})
export class Group extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true
  })
  public id!: string;

  @Column({ type: DataType.STRING }) //id người tạo
  public createdBy!: string;

  @Column({ type: DataType.STRING }) //id người sửa cuối cùng
  public updatedBy!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  public title!: string;

  @Column({ type: DataType.STRING, allowNull: true }) //Dùng cho tiêu đề trình duyệt và mục đích SEO
  public metaTitle!: string;

  @Column({ type: DataType.STRING, allowNull: false }) //Dùng cho việc tạo 1 url duy nhất
  public slug!: string;

  @Column({ type: DataType.STRING }) //Mô tả trang group
  public description!: string;

  @Column({ type: DataType.STRING }) // Mới, Đang hoạt động, Đã khóa
  public status!: string;

  @Column({ type: DataType.STRING }) // Mới, Đang hoạt động, Đã khóa
  public limit!: string;

  @Column({ type: DataType.STRING })
  public type!: string;
}
