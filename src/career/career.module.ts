import { Module } from '@nestjs/common';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerSchema } from './schemas/career.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Career',schema:CareerSchema}])],
  controllers: [CareerController],
  providers: [CareerService]
})
export class CareerModule {}
