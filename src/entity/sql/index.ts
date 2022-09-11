import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogs } from 'src/entity/blogs.entity';
export const SqlModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '101.34.251.59',
  port: 3306,
  username: 'myblogs',
  password: 'myblogs',
  database: 'myblogs',
  entities: [Blogs],
  synchronize: true,
});
