import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CareerService } from './career.service';
import { Career } from './schemas/career.schema';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Controller('careers')
export class CareerController {
    constructor(private careerService:CareerService){}

    @Get()
    async getAllcareers():Promise<Career[]>{
        return this.careerService.findAll()
    }

    @Post()
    async createCareer(
        @Body()
        career:CreateCareerDto
        ): Promise<Career>{
        return this.careerService.create(career);
    }

    @Get(':id')
    async getCareer(
        @Param('id')
        id:string,
    ):Promise<Career>{
        return this.careerService.findById(id);
    }

    @Put(':id')
    async UpdateCareer(
        @Param('id')
        id:string,
        @Body()
        store:UpdateCareerDto
        ): Promise<Career>{
        return this.careerService.updateById(id,store)
    }
    @Delete(':id')
    async deleteCareer(
        @Param('id')
        id:string,
    ):Promise<Career>{
        return this.careerService.deleteById(id);
    }
}

