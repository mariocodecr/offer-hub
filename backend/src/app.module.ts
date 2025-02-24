import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLogsModule } from './activity-logs.module';
import { RatingsModule } from './ratings.module';
import { ActivityLogs } from './entities';
import { Rating } from './entities/ratings.entity';

// Commented out since the files do not exist
// import { User } from './entities/user.entity';
// import { Project } from './entities/project.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'offerhub',
      entities: [ActivityLogs, Rating],
      synchronize: true,
    }),
    ActivityLogsModule, RatingsModule
  ],
})
export class AppModule {}
