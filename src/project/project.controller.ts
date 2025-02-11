import { Controller, Get, Req, Res } from '@nestjs/common';
import {Request, Response} from 'express';

@Controller('/project')
export class ProjectController {
    @Get()
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url);
        response.status(200).send('Hello World');
    }
}
