import {Injectable, NotFoundException} from '@nestjs/common';

export interface User{
    name: string;
    email: string;
}

@Injectable()
export class TasksService {
    private tasks = [];

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

    createTasks() {
        return 'Creating a task';
    }

    updateTasks() {
        return 'Update a task';
    }

    deleteTasks() {
        return 'Delete a task';
    }

    patchTasks() {
        return 'Patch a task';
    }
}