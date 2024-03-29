import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Career } from './schemas/career.schema';
import mongoose from 'mongoose';

@Injectable()
export class CareerService {
    constructor(
        @InjectModel(Career.name)
        private careerModel:mongoose.Model<Career>
    ){}

    async findAll():Promise<Career[]>{
        const careers = await this.careerModel.find()
        return careers
    }

    async create(career:Career):Promise<Career>{
        const res = await this.careerModel.create(career)
        return res
    }

    async findById(id:string):Promise<Career>{
        const cid = await this.careerModel.findById(id)
        if(!cid){
            throw new NotFoundException('Career not found')
        }   
        return cid
    }

    async updateById(id:string,cid:Career):Promise<Career>{
        return await this.careerModel.findByIdAndUpdate(id,cid,{
            new :true ,
            runValidators: true
        });
    }

    async deleteById(id:string):Promise<Career>{
        return await this.careerModel.findByIdAndDelete(id);
        }
}
