import { Controller, Param, Patch, Post, Res, Get, Body } from '@nestjs/common';
import { Worker } from '../persistence/documents/worker.document';
import { BaseController } from '../shared/controllers/base.controller';
import { WorkerService } from './worker.service';
import { WorkderPatchDto, WorkerPostDto } from '../shared/dto/worker.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { QueryDto } from 'src/shared/dto/query.dto';

@ApiTags('Worker')
@Controller('worker')
export class WorkerController extends BaseController<Worker, WorkerPostDto, WorkderPatchDto, WorkerService> {

    constructor(protected readonly workerService: WorkerService) {
        super(workerService);
    }

    // documentation purpose. In order to show the payload within the swagger
    @Post('')
    @ApiBody({ type: WorkerPostDto })
    @ApiResponse({ status: 200, description: 'OK.', type: Worker })
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    public async post(model: WorkerPostDto, @Res() res: Response): Promise<Response<Worker, Record<string, any>>> {
        return await super.post(model, res);
    }

    // documentation purpose. In order to show the payload within the swagger
    @Patch('')
    @ApiBody({ type: WorkderPatchDto })
    @ApiResponse({ status: 200, description: 'OK.', type: Worker })
    @ApiResponse({ status: 404, description: 'Not found' })
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    public async patch(model: WorkderPatchDto, @Res() res: Response): Promise<Response<Worker, Record<string, any>>> {
        return await super.post(model, res);
    }

    // documentation purpose. In order to show the payload within the swagger
    @Get(':id')
    @ApiResponse({ status: 200, description: 'OK.', type: Worker })
    @ApiResponse({ status: 404, description: 'Not found' })
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    public async find(@Param('id') id: string, @Res() res: Response): Promise<Response<Worker, Record<string, any>>> {
        return await super.find(id, res);
    }

    // documentation purpose. In order to show the payload within the swagger
    @Post('query')
    @ApiBody({ type: QueryDto })
    @ApiResponse({ status: 200, description: 'OK.', type: Worker, isArray: true })
    @ApiResponse({ status: 401, description: 'Unauthorized.' })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    public async query(@Body() model: QueryDto): Promise<Worker[]> {
        return await super.query(model);
    }

}
