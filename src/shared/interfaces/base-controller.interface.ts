import { BaseDto } from "../dto/base.dto";
import { DeleteDto } from "../dto/delete.dto";
import { QueryDto } from "../dto/query.dto";
import { Response } from 'express';
import { IDeleteResult } from "./base-service.interface";


export interface IBaseController<Document, PostDto, PatchDto extends BaseDto> {

    post(model: PostDto, res: Response): Promise<Response<Document, Record<string, any>>>;

    patch(model: PatchDto, res: Response): Promise<Response<Document, Record<string, any>>>;

    find(id: string, res: Response): Promise<Response<Document, Record<string, any>>>;

    query(model: QueryDto): Promise<Document[]>;

    delete(model: DeleteDto, res: Response): Promise<Response<IDeleteResult, Record<string, any>>>;
}
