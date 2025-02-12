import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User{
    name: string;
    email: string;
}

@Injectable()
export class TasksService {
    private tasks: { id: number; title: string; description: string }[] = [];

    getAllTasks():User {
        return {
            name: 'John',
            email: 'john@gmail.com'
        }
    }

    getTasks(id:number) {
        const tasksFound = this.tasks.find(task => task.id === id);

        if (!tasksFound) {
            return new NotFoundException(`Task with ID ${id} not found`);
        }
    }

    createTasks(task: CreateTaskDto) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
    }

    updateTasks(task: UpdateTaskDto) {
        console.log(task);
        return 'Update a task';
    }

    deleteTasks() {
        return 'Delete a task';
    }

    patchTasks() {
        return 'Patch a task';
    }
}