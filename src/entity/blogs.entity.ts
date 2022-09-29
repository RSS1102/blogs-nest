import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
@Entity()
export class Blogs {
  @PrimaryGeneratedColumn({ comment: 'id' })
  id: number;

  @Column({ nullable: true, comment: '标题' })
  title: string;

  @Column({ nullable: true, comment: '父级id' })
  parent: number;

  @Column({ nullable: true, comment: '内容' })
  content: string;

  @Column({ default: true, nullable: true, comment: '是否显示' })
  isShow: boolean;

  @Column({ nullable: true, comment: '浏览人数' })
  visitedNum: number;

  @Column({ nullable: true, comment: '点赞人数' })
  likedNum: number;

  @Column({ nullable: true, comment: '备注' })
  introduction: string;

  @CreateDateColumn({ comment: '创建时间' })
  createTime: Timestamp;

  @UpdateDateColumn({ comment: '修改时间' })
  updateTime: Timestamp;
}
