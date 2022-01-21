import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  task: ITask[] = [];

  create(taskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDTO,
    };

    this.task.push(task);
    return task;
  }

  findAll(): ITask[] {
    return this.task;
  }

  findOne(id: string): ITask {
    return this.task.find((t) => t.id === id);
  }

  update(id: string, taskDTO: TaskDTO): ITask {
      const newTask = { id, ...taskDTO };
      this.task = this.task.map( (t) => (t.id === id ? newTask : t) )

      return newTask;
  }

  delete(id: string): string {
      this.task = this.task.filter((t) => t.id !== id);
      return 'Task Delete Success';
  }
}
