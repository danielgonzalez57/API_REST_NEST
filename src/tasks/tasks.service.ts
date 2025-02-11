import {Injectable} from '@nestjs/common';

export interface User{
    name: string;
    email: string;
}

@Injectable()
export class TasksService {
    private tasks = ['task 1', 'task 2', 'task 3'];

    getAllTasks():User {
        return {
            name: 'John',
            email: 'john@gmail.com'
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