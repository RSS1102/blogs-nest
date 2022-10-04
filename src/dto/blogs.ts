import { IsNotEmpty, IsString } from 'class-validator';
export class BlogsDto {
  @IsNotEmpty({ message: 'title 不允许为空' })
  @IsString({ message: '参数错误必须为「string」类型 ' })
  title: string;
}
