import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Blogs {
  @PrimaryGeneratedColumn()
  id: number;
  //标题
  @Column()
  title: string;
  // 内容
  @Column()
  content: string;
  // 是否显示
  @Column({ default: true })
  isShow: boolean;
  //  浏览人数
  @Column()
  visitedNum: number;
  // 点赞人数
  @Column()
  likedNum: number;
  // 备注
  @Column()
  introduction: string;
  // 创建时间
  createTime: Date;
  // 修改时间
  updateTime: Date;
}
