import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ProjectModule, TasksModule],
})
export class AppModule {}
