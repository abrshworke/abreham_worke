import { Injectable } from '@nestjs/common';
import {NotFoundException} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose from 'mongoose';
import { Medicine } from './schemas/medicine.schema';
/* import { save } from './schemas/medicine.schema' */

@Injectable()
export class MedicineService {
    constructor(
        @InjectModel(Medicine.name)
        private medicineModel: mongoose.Model<Medicine>
    ){}

    async findAll():Promise<Medicine[]>{
        const medicine = await this.medicineModel.find()
        return medicine
    }

    async create(medicine: Medicine): Promise<Medicine>{
        const res = await this.medicineModel.create(medicine)
        return res
    }

    async findById(id:string): Promise<Medicine>{
        const medicine = await this.medicineModel.findById(id)

        if(!medicine){
            throw new NotFoundException('Medicine not found')
        }
        return medicine
    }
     async updateById(id:string, medicine: Medicine)/* Promise<Medicine> */{
        return await this.medicineModel.findByIdAndUpdate({_id:id}, medicine,{
            new:true,
            runVailators: true,  
    })
    } 

    async deleteById(id:string): Promise<Medicine>{
        return await this.medicineModel.findByIdAndDelete({_id:id},{
            new:true
        });
    }
}
