import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(@Query() query: any) {  
        console.log(query);
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTasks(@Param('id') id: string) {  
        console.log(id);
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTasks(@Body() task: any) {
        console.log(task);
        return this.tasksService.createTasks();
    }

    @Put()
    updateTasks() {
        return this.tasksService.updateTasks();
    }

    @Delete()
    deleteTasks() {
        return this.tasksService.deleteTasks();
    }

    @Patch()
    patchTasks() {
        return this.tasksService.patchTasks();
    }

}
