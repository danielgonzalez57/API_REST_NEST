import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto'; 
import { UpdateTaskDto } from './dto/update-task.dto';

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
        return this.tasksService.getTasks(parseInt(id));
    }

    @Post()
    // @UsePipes(new ValidationPipe())
    createTasks(@Body() task: CreateTaskDto) {
        console.log(task);
        return this.tasksService.createTasks(task);
    }

    @Put()
    updateTasks(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTasks(task);
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
