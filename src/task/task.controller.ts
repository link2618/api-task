import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';

import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {

    // Ejemplos
    @Post(':id')
    method(@Req() req: Request, @Param() params: any) {
        return {
            method: req.method,
            params
        }
    }

    @Get('prueba')
    methodGet(@Req() req: Request, @Query() query: any) {
        return {
            method: req.method,
            query
        }
    }

    @Put()
    methodPut(@Req() req: Request, @Body() body: any) {
        return {
            method: req.method,
            body
        }
    }

    @Delete()
    methodDelete(@Req() req: Request) {
        return `metodo ${req.method}`
    }

    constructor(private readonly taskService: TaskService) {}

    // Tareas
    // para validar npm i class-validator class-transformer
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() taskDTO: TaskDTO) {
        // throw new HttpException('Error', HttpStatus.BAD_REQUEST);
        // manejo de errores con 
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => reject('error'), 2000)
        // })
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => reject('error por tiempo'), 5000)
        // })
        return this.taskService.create(taskDTO)
    }

    @Get()
    findAll() {
        return this.taskService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
        return this.taskService.update(id, taskDTO)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.taskService.delete(id)
    }
}
