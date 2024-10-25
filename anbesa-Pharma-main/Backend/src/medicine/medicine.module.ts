import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';
/* import { Mongoose } from 'mongoose'; */
import { MedicineSchema } from './schemas/medicine.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([{name: 'Medicine', schema: MedicineSchema}])],
  controllers: [MedicineController],
  providers: [MedicineService]
})
export class MedicineModule {}
